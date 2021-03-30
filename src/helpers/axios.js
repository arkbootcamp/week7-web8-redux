const axios = require('axios');
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  console.log(error.response.data.error.message);
  // const originalRequest = error.config;
  if (error.response.status === 401 ) {
    if (error.response.data.error.message === 'token expired') {
      localStorage.removeItem('token')
    }
    if (error.response.data.error.message === 'invalid signature'){
      localStorage.removeItem('token')
      alert('jangan ubah token')
    }
  //   originalRequest._retry = true;
  //   const access_token = await refreshAccessToken();
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
  //   return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default axiosApiInstance
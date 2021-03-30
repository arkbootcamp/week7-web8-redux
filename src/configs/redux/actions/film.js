import axiosApiInstance from '../../../helpers/axios'
export const insertProduct = (data)=>dispatch=>{
  return new Promise((resolve, reject)=>{
    axiosApiInstance.post('http://localhost:4500/v1/products', data)
    .then((res)=>{
      const result = res.data
      console.log(res);
      dispatch({type: 'INSERT_PRODUCT'})
      resolve(result)
    })
    .catch((err)=>{
      console.log(err);
      reject(err)
    })
  })
}
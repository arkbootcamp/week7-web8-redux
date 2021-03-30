import axiosApiInstance from '../../../helpers/axios'

export const getPost = (page=1) => {
  return (dispatch) => {
    axiosApiInstance.get(`https://jsonplaceholder.typicode.com/posts/${page}`)
      .then((res) => {
        const dataPost = res.data
        console.log(dataPost);
        dispatch({ type: 'GET_POST1', payload: dataPost })
        // dispatch(getPost(dataPost))
      })
  }
}

export const increment = () => {
  return (dispatch)=>{
    setTimeout(() => {
      dispatch({ type: 'INCREMENT_NOMOR' })
    }, 2000)
  }
}
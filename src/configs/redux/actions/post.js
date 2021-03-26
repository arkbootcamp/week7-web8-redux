import axios from 'axios'

export const getPost = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const dataPost = res.data
        dispatch({ type: 'GET_POST', payload: dataPost })
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
const initialState = {
  posts: [],
  loading: false,
  error: '',
  nomor: 0
}

const postReducer = (state = initialState, action) =>{
  if(action.type === 'GET_POST'){
    return {
      ...state,
      posts: action.payload
    }
  } else if (action.type === 'INCREMENT_NOMOR'){
    return{
      ...state,
      nomor: state.nomor + 1
    }
  }
  else{
    return state
  }
}

export default postReducer
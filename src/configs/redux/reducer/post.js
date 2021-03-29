const initialState = {
  posts: [],
  loading: false,
  error: '',
  nomor: 0
}

const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_POST':
      return {
        ...state,
        posts: action.payload
      }
    case 'INCREMENT_NOMOR':
      return {
        ...state,
        nomor: state.nomor + 1
      }
    default:
      return state
  }
  // const _action = {
  //   GET_POST: () => {
  //     return {
  //       ...state,
  //       posts: action.payload
  //     }
  //   },
  //   INCREMENT_NOMOR:()=>{
  //     return {
  //       ...state,
  //       nomor: state.nomor + 1
  //     }
  //   },
  //   DEFAULT: () => state
  // }
  // return (_action[action.type] || _action.DEFAULT)()
}

export default postReducer
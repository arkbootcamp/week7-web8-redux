const initialState = {
  history: [],
  tranctions: ""
}
const historyReducer = (state = initialState, action) => {
  if (action.type === 'GET_HISTORY') {
    return {
      ...state,
      history: action.payload
    }
  } else if (action.type === 'GET_TRANCTION'){
    return {
      ...state,
      tranctions: action.payload
    }
  } 
  
  else {
    return state
  }
}
export default historyReducer
const initialState = {
  user: {
    name: 'risano akbar',
    email: ''
  },
  loading: false,
  error: ''
}
const userReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1
    }
  } else if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1
    }
  }
  else {
    return state
  }
}
export default userReducer
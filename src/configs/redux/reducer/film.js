const initialState = {
  film: [
    {
      id: 1,
      name: 'naruto',
      price: 40000
    },
    {
      id: 2,
      name: 'doraemon',
      price: 40000
    },
    {
      id: 3,
      name: 'kura kura ninja',
      price: 40000
    }
  ]
}
const filmReducer = (state = initialState, action) => {
  if (action.type === 'GET_FILM') {
    return {
      ...state,
      film: [
        ...state.film,
        ...action.payload
      ]
    }
  }
  else {
    return state
  }
}

export default filmReducer
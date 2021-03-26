import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../components/Card'

function Home() {

  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const {film} = useSelector(state => state.film)
  // console.log(stateUser);
  // const handleIncrement = ()=>{
  //   dispatch({ type: 'INCREMENT'})
  // }
  // const handleDecrement = ()=>{
  //   dispatch({type: 'DECREMENT'})
  // }

  const handleAddFilm =()=>{
    dispatch({ 
      type: 'GET_FILM',
      payload: [
        {id: 7, name: 'pokemon', price: 40000},
        {id: 8, name: 'digimon', price: 10000}
      ]
  })

  }

  return (
    <div>
      <h1>halaman home</h1>
      <h4>user adlaah {user.name}</h4>
      <Card/>
      {film.map((item)=>
      <h4>{item.name}</h4>
      )}



      <button onClick={handleAddFilm}>add film</button>
      {/* <h4>nilai saya adlaah {count}</h4>
      <button onClick={handleIncrement}>Incremenet</button>
      <button onClick={handleDecrement}>Decrement</button> */}
    </div>
  )
}

export default Home

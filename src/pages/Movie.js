import React, {useEffect} from 'react'
import CardMovie from '../components/CardMovie'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { getPost, increment} from '../configs/redux/actions/post'

function Movie() {
  const dispatch = useDispatch()
  const {posts, nomor} = useSelector(state => state.post)
  const history = useHistory() 

  useEffect(() => {
    const data = {name: 'risano'}
    dispatch(getPost(data))
  }, [dispatch])
  
  const handleChagePage = ()=>{
    history.push('/order')
  } 
  const handleChangeNo = ()=>{
    dispatch(increment())
  }
  return (
    <div>
      <div className="container">
        <h1>halaman Movie = {nomor}</h1>
        <button onClick={handleChangeNo}>Increment</button>
        {posts.map((post)=>
          <CardMovie
            title={post.title}
            content={post.body}
            key={post.id}
          />
        )}
        <button onClick={handleChagePage}>pindah ke order</button>
      </div>
    </div>
  )
}

export default Movie

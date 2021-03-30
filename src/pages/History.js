import React, { useState, useEffect } from 'react'
import { getPost } from '../configs/redux/actions/post'
import {useDispatch} from 'react-redux'

function History() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost(page))
    
  }, [page])
  return (
    <div>
      <h1>halaman history</h1>
      {Array.from(Array(5).keys()).map(item =>
        <button onClick={()=>setPage(item + 1)}>{item+1}</button>
        
        )}
    </div>
  )
}

export default History

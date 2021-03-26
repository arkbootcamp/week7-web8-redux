import React from 'react'
import {useSelector} from 'react-redux'
function Order() {
  const {posts} = useSelector(state => state.post)

  return (
    <div>
      <h1>halaman order</h1>
      <ul>
        {posts.map((post)=>
          <li>{post.title}</li>
        )}
      </ul>
    </div>
  )
}

export default Order

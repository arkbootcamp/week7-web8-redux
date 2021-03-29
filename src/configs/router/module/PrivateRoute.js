import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function PrivateRoute({component:Component, ...rest}) {
  const isAuthenticated = localStorage.getItem('token')
  const inputan = {
    value: "",
    name: "email"
  }
  return (
    <Route  {...rest} render={(props)=>
      isAuthenticated ? <Component  {...props}/> : <Redirect to="/login"/>
    } />
  )
}

export default PrivateRoute

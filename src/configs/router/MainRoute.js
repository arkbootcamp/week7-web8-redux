import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Movie from '../../pages/Movie'
import Order from '../../pages/Order'
import Detail from '../../pages/Detail'
import Login from '../../pages/auth/Login'
import PrivateRoute from './module/PrivateRoute'

function MainRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/movie" component={Movie} />
        <Route path="/order" component={Order} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" render={(props) => <Login {...props}/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRoute

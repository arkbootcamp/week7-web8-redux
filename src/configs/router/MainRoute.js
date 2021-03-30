import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Movie from '../../pages/Movie'
import Order from '../../pages/Order'
import Detail from '../../pages/Detail'
import Login from '../../pages/auth/Login'
import InsertProduct from '../../pages/InsertProduct'
import PrivateRoute from './module/PrivateRoute'
import History from '../../pages/History'

function MainRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/movie" component={Movie} />
        <Route path="/order" component={Order} />
        <Route path="/detail" component={Detail} />
        <PrivateRoute path="/product" component={InsertProduct} />
        <PrivateRoute path="/history" component={History} />
        <Route path="/login" render={(props) => <Login {...props}/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRoute

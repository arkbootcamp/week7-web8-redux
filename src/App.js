import {Provider} from 'react-redux'
import store from './configs/redux/store'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Order from './pages/Order'
import Detail from './pages/Detail'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" component={Movie} />
          <Route path="/order" component={Order} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

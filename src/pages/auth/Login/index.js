import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {login} from '../../../configs/redux/actions/user'


function Login(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const {loading} = useSelector(state=>state.user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log('isi prosp login', props);
  const handleLogin =(e)=>{
    e.preventDefault();
    const data ={
      email,
      password
    }
    dispatch(login(data))
    .then((res)=>{
      history.push('/')
    })
    .catch((err)=>{
      alert('login failed')
    })
  }

  return (
    <div className="container">
      {/* <form onSubmit={handleLogin}> */}
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" value={password} class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
      <button onClick={handleLogin} type="submit" class="btn btn-primary">{!loading ? 'Login': 'loading.....'}</button>
      {/* </form> */}
    </div>
  )
}

export default Login

import React, { useState } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../actions'
import Loader from 'react-loader-spinner'
import { LoginFormItem } from '../styles/S_LoginForm'

const LoginForm = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const useLogin = e => {
    e.preventDefault();
    props.login ({
      username: username,
      password: password
    }).then(() => {
      props.history.push('/')
    })
    setUsername('')
    setPassword('')

  }

  console.log(props)

  return (
    <LoginFormItem>
      <input
        name='username'
        placeholder='Enter Username'
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <input
        type='password'
        name='username'
        placeholder='Enter Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={useLogin}>{
        props.isLoggingIn ?
          <Loader type='ThreeDots' color='white' height='10' width='70' /> :
          'Login'
        }
      </button>
    </LoginFormItem>
  )
}

const mapStateToProps = ({ friendsReducer }) => {
  console.log(friendsReducer)
  return ({
    error: friendsReducer.error,
    isLoggingIn: friendsReducer.isLoggingIn
  })
}

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginForm)
)

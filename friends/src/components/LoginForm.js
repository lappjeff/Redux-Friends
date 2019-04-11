import React, { useState } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../actions'
import { LoginFormItem } from '../styles/S_LoginForm'

const LoginForm = props => {

  console.log(props)
  const useLogin = e => {
    e.preventDefault();
    props.login()
  }

  return (
    <LoginFormItem>
      <input
        name='username'
        placeholder='Enter Username'
      />
      <input
        type='password'
        name='username'
        placeholder='Enter Password'
      />
      <button onClick={useLogin}>Login</button>
    </LoginFormItem>
  )
}

export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
)

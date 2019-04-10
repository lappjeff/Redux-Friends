import React, { useState } from 'react'

import {
  LoginFormItem,
} from '../styles/S_LoginForm'

const LoginForm = props => {

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
      <button>Login</button>
    </LoginFormItem>
  )
}

export default LoginForm

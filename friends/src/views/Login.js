import React from 'react'

import LoginForm from '../components/LoginForm'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { LoginFormContainer } from '../styles/S_LoginForm'

const Login = props => {

  return (
    <LoginFormContainer width='50%' height='350px'>
      <LoginForm />
    </LoginFormContainer>
  )
}

export default withRouter(
  connect(null, {})(Login)
)

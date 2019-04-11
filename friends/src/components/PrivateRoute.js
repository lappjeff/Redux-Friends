import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (

    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props } />
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  )
}

const mapStateToProps = ({ friendsReducer }) => (
  {
  errorStatusCode: friendsReducer.errorStatusCode
})

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute)

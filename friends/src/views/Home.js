import React from 'react'
import { Link } from 'react-router-dom'
import { FriendsList } from '../views'

import { HomeDiv } from '../styles/S_Home'
const Home = props => {
  return (
    <>
    {localStorage.getItem('token') ? <FriendsList /> : (
      <>
      <HomeDiv>
        <h1>Looks like you're not logged in.</h1>
        <h3>Log in to see your friends!</h3>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </HomeDiv>
      </>
    )}
  </>
  )

}

export default Home

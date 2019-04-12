import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getData } from '../actions'
import { withRouter } from 'react-router-dom'
import {
  HomeContainer,
  FriendsContainer,
  ButtonContainer,
  Button
} from '../styles/S_FriendsList.js'

import Friend  from '../components/Friend'
const FriendsList = props => {

  useEffect(() => props.getData(), [])

  const logOut = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }
  return (
    <HomeContainer>
    <FriendsContainer>
      <h2>Friends</h2>
      {props.friends.map(friend => {
        return <Friend friend={friend} key={friend.id}/>
      })}
    </FriendsContainer>
    <ButtonContainer>
      <Button onClick={logOut}>Logout</Button>
    </ButtonContainer>

    </HomeContainer>
  )
}

const mapStateToProps = state => ({ friendsReducer }) => {
  return {
    friends: friendsReducer.friends,
    isFetching: friendsReducer.isFetching
  }
}

export default withRouter(
  connect(mapStateToProps, { getData })(FriendsList))

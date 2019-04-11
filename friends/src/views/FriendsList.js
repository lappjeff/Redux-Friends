import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getData } from '../actions'
import {
  HomeContainer,
  FriendsContainer,
  ButtonContainer,
  Button
} from '../styles/S_FriendsList.js'

import Friend  from '../components/Friend'
const FriendsList = props => {

  useEffect(() => props.getData(), [])

  return (
    <HomeContainer>
    <FriendsContainer>
      <h2>Friends</h2>
      {props.friends.map(friend => {
        return <Friend friend={friend} key={friend.id}/>
      })}
    </FriendsContainer>
    <ButtonContainer>
      <Button>Logout</Button>
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

export default connect(mapStateToProps, { getData })(FriendsList)

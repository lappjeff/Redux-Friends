import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { getData } from '../actions'
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {
  HomeContainer,
  FriendsContainer,
  ButtonContainer,
  Button
} from '../styles/S_FriendsList.js'

import Friend  from '../components/Friend'
import AddFriendForm from '../components/AddFriendForm'
const FriendsList = props => {

  useEffect(() => useData(), [])
  useEffect(() => setFriends([...props.friends]), [props.friends])

  const [friends, setFriends] = useState([])

  const useData = () => {
    props.getData()
  }

  const logOut = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <HomeContainer>
    <FriendsContainer>
      <h2>Friends</h2>
      {props.isFetching ?
        <Loader type="Audio" color="white" height={80} width={80} /> :
        friends.map(friend => <Friend key={friend.email} friend={friend}/>)
      }
    </FriendsContainer>

    <AddFriendForm
      updateFriends={setFriends}
      friends={friends}
      getData={props.getData}
    />
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

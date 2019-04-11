import React from 'react'

import {
  HomeContainer,
  FriendsContainer,
  ButtonContainer,
  Button
} from '../styles/S_FriendsList.js'

const FriendsList = props => {

  return (
    <HomeContainer>
    <FriendsContainer>
      <h2>Friends</h2>

    </FriendsContainer>
    <ButtonContainer>
      <Button>Logout</Button>
    </ButtonContainer>

    </HomeContainer>
  )
}

export default FriendsList

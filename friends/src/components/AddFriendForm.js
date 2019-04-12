import React, { useState } from 'react'

import { LoginFormContainer, LoginFormItem,  } from '../styles/S_LoginForm'
import { connect } from 'react-redux'
import { addFriend } from '../actions'
const AddFriendForm = props => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const newFriend = {
    name,
    age,
    email
  }

  const addFriend = e => {
    e.preventDefault();
    if (email && age && name) {
      props.addFriend(newFriend)
        .then(() => props.updateFriends([...props.friends, newFriend]))
      setName('')
      setAge('')
      setEmail('')


    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <LoginFormContainer gridArea='AF' width='90%'>
      <LoginFormItem>
        <input
          placeholder='Friend Name'
          value={name}
          onChange={e => setName(e.target.value)}
          />
        <input
          placeholder='Friend Age'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          placeholder='Friend Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h2>{props.message}</h2>
        <button
          type='submit'
          onClick={addFriend}
        >
          Add Friend
        </button>
      </LoginFormItem>
    </LoginFormContainer>
  )
}

const mapStateToProps = ({addFriendReducer}) => ({
  isAdding: addFriendReducer.isAdding,
  message: addFriendReducer.message
})
export default connect(mapStateToProps, { addFriend })(AddFriendForm)

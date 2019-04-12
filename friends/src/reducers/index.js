import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { friendsReducer } from './friendsReducer'
import { addFriendReducer } from './addFriendReducer'

export default combineReducers({
  loginReducer,
  friendsReducer,
  addFriendReducer
})

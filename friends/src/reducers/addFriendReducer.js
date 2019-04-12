import {
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAIL
} from '../actions'

const initialState = {
  isAdding: false,
  message: ''
}

export const addFriendReducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_FRIEND_START:
      return {
        ...state,
        isAdding: true
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: 'Friend was added!'
      }
    case ADD_FRIEND_FAIL:
      return {
        ...state,
        message: 'Friend could not be added.'
      }
    default: return state
  }
}

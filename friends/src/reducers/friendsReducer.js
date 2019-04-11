import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions'

const initialState = {
  friends: [],
  isLoggingIn: false
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      console.log(state)
      return {
        ...state,
        error: '',
        isLoggingIn: true
      }
    default:
      console.log('trigged')
      return state
  }
}

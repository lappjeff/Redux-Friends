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
      return {
        ...state,
        error: '',
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        isLoggingIn: false
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Please check your credentials and try again',
        isLoggingIn: false
      }
    default:
      console.log('trigged')
      return state
  }
}

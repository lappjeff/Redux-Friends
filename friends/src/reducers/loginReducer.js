import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions'

const initialState = {
  isLoggingIn: false,
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        isLoggingIn: true,
        errorStatusCode: null
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
        errorStatusCode: null,
        isLoggingIn: false
      }
    default:
      return state
  }
}

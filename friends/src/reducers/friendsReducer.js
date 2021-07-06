import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../actions'

const initialState = {
  friends: [],
  isFetching: false,
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      }
      case FETCH_DATA_FAIL:
        return {
          ...state,
          isFetching: false,
        }
    default: return state
  }
}

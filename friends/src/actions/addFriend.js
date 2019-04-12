import axiosWithAuth from '../utils/axiosAuth'
import { getData } from './index'

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL'

export const addFriend = info => dispatch => {
  dispatch ({ type: ADD_FRIEND_START, payload: info })



  return axiosWithAuth()
    .post('http://localhost:5000/api/friends', info)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS})
    })
    .catch(err => { dispatch({ type: ADD_FRIEND_FAIL, payload: err})})
}

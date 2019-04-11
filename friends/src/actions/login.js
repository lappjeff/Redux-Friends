import axios from 'axios'

export const LOGIN_START = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('http://localhost:5000/api/login')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

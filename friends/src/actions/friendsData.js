import axiosWithAuth from '../utils/axiosAuth'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })

  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err})
    })
}

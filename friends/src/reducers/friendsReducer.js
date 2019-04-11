const initialState = {
  friends: []
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      console.log('trigged')
      return state
  }
}

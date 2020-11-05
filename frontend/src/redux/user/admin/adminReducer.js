import adminTypes from "./adminTypes"

const adminReducer = (state = { usersFetchState: true,usersList:[] }, action) => {
  switch (action.type) {
    // get all  users data

    case adminTypes.GET_USER_LIST_START:
      return { usersFetchState: true }
    case adminTypes.GET_USER_LIST_SUCCESS:
      return { usersFetchState: false, usersList: action.payload }
    case adminTypes.GET_USER_LIST_FAIL:
      return { usersFetchState: false, usersListErrorMessage: action.payload }

    default:
      return state
  }
}

export default adminReducer

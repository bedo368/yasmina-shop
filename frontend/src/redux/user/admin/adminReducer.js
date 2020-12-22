import adminTypes from "./adminTypes"
const intial_state = { usersFetchState: true, usersList: [], getUserFetchState: true }

const adminReducer = (state = intial_state, action) => {
  switch (action.type) {
    // get all  users data

    case adminTypes.GET_USER_LIST_START:
      return { usersFetchState: true }
    case adminTypes.GET_USER_LIST_SUCCESS:
      return { usersFetchState: false, usersList: action.payload }
    case adminTypes.GET_USER_LIST_FAIL:
      console.log(action.payload)
      return { usersFetchState: false, usersListErrorMessage: action.payload }
    // remove user and thie orders  from database
    case "REMOVE_USER_FROM_DATA":
      return {
        usersList: state.usersList.filter((user) => user._id !== action.payload),
      }
    case adminTypes.REMOVE_USER_FAIL:
      return { ...state, deleteUserErrorMessage: action.payload }

    // get user for admin from database
    case adminTypes.GET_USER_PROFILE_START_FOR_ADMIN:
      return { ...intial_state }

    case adminTypes.GET_USER_PROFILE_SUCCESS_FOR_ADMIN:
      return {
        ...intial_state,
        getUserFetchState: false,
        UserForAdmin: action.payload,
      }
    case adminTypes.GET_USER_PROFILE_FAIL_FOR_ADMIN:
      return {
        ...intial_state,
        UserForAdminError: action.payload,
        getUserFetchState: false,
      }
    case adminTypes.UPDATE_PROFILE_START_FOR_ADMIN:
      return { ...intial_state, updateUserState: true }

    case adminTypes.UPDATE_PROFILE_SUCCESS_FOR_ADMIN:
      return {
        ...intial_state,
        getUserFetchState: false,
        UserForAdmin: action.payload,
        updateUserSuccess: true,
        updateUserState: false,
      }

    case adminTypes.REST_ADMIN:
      return intial_state

    default:
      return state
  }
}

export default adminReducer

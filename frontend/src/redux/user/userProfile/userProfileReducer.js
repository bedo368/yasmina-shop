import userProfilTypes from "./userProfileTypes"
const INTIAL_STATE = {
  getUserProlieFetchState: false,
  userProfileInfo: {},
  userProfileErrorMessage: "",
}

const userProfileReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    //case get user profile
    case userProfilTypes.USER_GET_PROFILE_START:
      return {
        ...state,
        getUserProlieFetchState: true,
      }
    case userProfilTypes.USER_GET_PROFILE_SUCCESS:
      return {
        getUserProlieFetchState: false,
        userProfileInfo: action.payload,
        userProfileErrorMessage: null,
      }

    case userProfilTypes.USER_GET_PROFILE_FAIL:
      localStorage.setItem("userInfo", null)
      return { ...state, userProfileErrorMessage: action.payload, userProfileInfo: null }
      // UPDATE USER PROFILE
    case userProfilTypes.USER_UPDATE_PROFILE_START:
      return {
        ...state,
        getUserProlieFetchState: true,
      }
    case userProfilTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        getUserProlieFetchState: false,
        userProfileInfo: action.payload,
        userProfileErrorMessage: null,
      }
    case userProfilTypes.USER_UPDATE_PROFILE_FAIL:
      return { ...state, userProfileErrorMessage: action.payload ,getUserProlieFetchState: false }

    case userProfilTypes.USER_PROFILE_RESET : 
    return{...INTIAL_STATE}
    default:
      return state
  }
}

export default userProfileReducer

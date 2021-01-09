import userTypes from "./userTypes"

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {token:""}
const INTIAL_STATE = {
  userInfo: userInfo,
  fetchState: false,
  errorMassage: "",
  
}

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    // log in fetch reducer
    case userTypes.USER_LOGIN_START:
      return {
        ...state,
        fetchState: true,
      }
    case userTypes.USER_LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload, errorMassage: "", fetchState: false }

    case userTypes.USER_LOGIN_FAIL:
      localStorage.setItem("userInfo", null)
      return { errorMassage: action.payload, fetchState: false, userInfo: null }

    // log out fetch reducer
    case userTypes.LOGOUT:
      return { errorMassage: "", fetchState: false, userInfo: null }

    // register reducer
    case userTypes.USER_REGISTER_START:
      return {
        ...state,
        fetchState: true,
      }
    case userTypes.USER_REGISTER_SUCCESS:
      return { ...state, userInfo: action.payload, errorMassage: "", fetchState: false }

    case userTypes.USER_REGISTER_FAIL:
      localStorage.setItem("userInfo", null)
      return { errorMassage: action.payload, fetchState: false, userInfo: null }

    
    case userTypes.UPDATE_USER_INFO : 
    return {...state ,userInfo : { ...state.userInfo , ...action.payload}  }
    default:
      return state
  }
}

export default userReducer

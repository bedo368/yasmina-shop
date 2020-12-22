import userTypes from "./userTypes"
import Axios from "axios"

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.USER_LOGIN_START,
    })
    const { data } = await Axios({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    dispatch({
      type: userTypes.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    const errorMessage = error.response.data.message
      ? error.response.data.message
      : "error happend"
    dispatch({
      type: userTypes.USER_LOGIN_FAIL,
      payload: errorMessage,
    })
    localStorage.setItem("userInfo", null)
  }
}



export const logout = () => (dispatch) => {
  dispatch({
    type: userTypes.LOGOUT,
  })
  dispatch({type :"USER_PROFILE_RESET"})
  localStorage.setItem("userInfo", null)
  dispatch({type :"REST_ADMIN"})
}

export const register = (name, email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: userTypes.USER_REGISTER_START,
    })
    const { data } = await Axios({
      method: "POST",
      url: "/register",
      data: {
        email,
        password,
        name,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
    dispatch({
      type: userTypes.USER_REGISTER_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    const errorMessage = error.response.data.message
      ? error.response.data.message
      : "error happend"
    dispatch({
      type: userTypes.USER_REGISTER_FAIL,
      payload: errorMessage,
    })
    localStorage.setItem("userInfo", null)
  }
}



export const checkForToken = () => async (dispatch , getState) => {
  console.log("ff");
  const token = getState().userReducer.userInfo?.token 
    Axios({
      method: "POST",
      url: "/checktoken",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((data)=>{
      console.log("success");
      dispatch({
        type: userTypes.USER_REGISTER_SUCCESS,
        payload: data.data,
      })
    }).catch((error)=>{
      const errorMessage = error.response.data.message
      ? error.response.data.message
      : "error happend"
    dispatch({
      type: userTypes.LOGOUT,
    })
    localStorage.setItem("userInfo", null)

    })

  
    

}


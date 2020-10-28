import userProfilTypes from "./userProfileTypes"
import Axios from "axios"
import userTypes from "../userTypes"
export const getUserProfile = () => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token
    dispatch({
      type: userProfilTypes.USER_GET_PROFILE_START,
    })
    const query = `
        query{
            getUserProfile{
                name
                email
                isAdmin
            }
        }
      `
    const { data } = await Axios({
      method: "POST",
      url: "/graphql",
      data: {
        query,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    dispatch({
      type: userProfilTypes.USER_GET_PROFILE_SUCCESS,
      payload: data.data.getUserProfile,
    })
  } catch (error) {
    const errorMessage = error.response.data.errors
      ? error.response.data.errors[0].message
      : error.response.data
    dispatch({
      type: userProfilTypes.USER_GET_PROFILE_FAIL,
      payload: errorMessage,
    })
  }
}

export const updateUserProfile = (name, email, newPassword, oldPassword) => async (
  dispatch,
  getState
) => {
  if (!oldPassword) {
    dispatch({
      type: userProfilTypes.USER_UPDATE_PROFILE_FAIL,
      payload: "enter your old password ",
    })
    return
  }

  try {
    const token = getState().userReducer.userInfo.token
    dispatch({
      type: userProfilTypes.USER_UPDATE_PROFILE_START,
    })
    const query = `
    mutation{
          updateUserProfile(email:"${email}" , password:"${newPassword}" , name:"${name}" , oldPassword:"${oldPassword}" ){
                name
                email
                isAdmin
            }
        }
      `
    const { data } = await Axios({
      method: "POST",
      url: "/graphql",
      data: {
        query,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    dispatch({
      type: userProfilTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data.data.updateUserProfile,
    })
    dispatch({
      type: userTypes.UPDATE_USER_INFO,
      payload: data.data.updateUserProfile,
    })
    localStorage.setItem("userInfo", JSON.stringify(getState().userReducer.userInfo))

  } catch (error) {
    const errorMessage = error.response.data.errors
      ? error.response.data.errors[0].message
      : error.response.data
      ? error.response.data
      : "error happend"
    dispatch({
      type: userProfilTypes.USER_UPDATE_PROFILE_FAIL,
      payload: errorMessage,
    })
  }
}

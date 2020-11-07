import Axios from "axios"
import adminTypes from "./adminTypes"

export const getUsersForAdmin = () => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token
    dispatch({
      type: adminTypes.GET_USER_LIST_START,
    })
    const query = `
          query{
            getAllUsersForAdmin{
                  _id
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
      type: adminTypes.GET_USER_LIST_SUCCESS,
      payload: data.data.getAllUsersForAdmin,
    })
  } catch (error) {
    const errorMessage = error.response.data.errors
      ? error.response.data.errors[0].message
      : error.response.data
    dispatch({
      type: adminTypes.GET_USER_LIST_FAIL,
      payload: errorMessage,
    })
  }
}

export const removeUserFromUsersList = (id) => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token
    const query = `
          mutation removeUserById($id:String!){
            removeUserById(id :$id){
                  _id
                  
               
              }
          }
        `
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables: { id },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: adminTypes.REMOVE_USER_FROM_DATA,
      payload: data.data.removeUserById._id,
    })
  } catch (error) {
    console.log(error)
    const errorMessage = error?.response?.data.errors
      ? error?.response?.data?.errors[0].message
      : error?.response?.data
    dispatch({
      type: adminTypes.REMOVE_USER_FAIL,
      payload: errorMessage,
    })
  }
}

export const getUserProfileForAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: adminTypes.GET_USER_PROFILE_START_FOR_ADMIN,
    })
    const token = getState().userReducer.userInfo.token
    const query = `
          query getUserByIdForAdmin($id:String!){
            getUserByIdForAdmin(id :$id){
                  _id
                  name
                  email
                  ordersList
              }
          }
        `
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables: { id },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: adminTypes.GET_USER_PROFILE_SUCCESS_FOR_ADMIN,
      payload: data.data.getUserByIdForAdmin,
    })
  } catch (error) {
    console.log(error)
    const errorMessage = error?.response?.data.errors
      ? error?.response?.data?.errors[0].message
      : error?.response?.data
    dispatch({
      type: adminTypes.GET_USER_PROFILE_FAIL_FOR_ADMIN,
      payload: errorMessage,
    })
  }
}

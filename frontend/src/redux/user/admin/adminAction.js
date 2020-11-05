import Axios from "axios"
import adminTypes from "./adminTypes"

export const getUsersForAdmin = () => async (dispatch, getState) => {
    try {
      const token = getState().userReducer.userInfo.token
      dispatch({
        type:adminTypes.GET_USER_LIST_START ,
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
        type:adminTypes.GET_USER_LIST_SUCCESS ,
        payload: data.data.getAllUsersForAdmin,
      })
    } catch (error) {
      const errorMessage = error.response.data.errors
        ? error.response.data.errors[0].message
        : error.response.data
      dispatch({
        type:adminTypes.GET_USER_LIST_FAIL ,
        payload: errorMessage,
      })
    }
  }
  
  
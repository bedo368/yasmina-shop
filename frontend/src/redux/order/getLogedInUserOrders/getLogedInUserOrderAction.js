
import Axios from "axios"
import getLogedInUserOrdersTypes from "./getLogedInUserOrdersTypes"


export const getLogedInUserOrders = () => async (dispatch, getState) => {
    try {
      const token = getState().userReducer.userInfo.token
      dispatch({
        type: getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_START,
      })
      const query = `query {
        getAllLogedInUserOrders{
            _id
            totalPrice
            isPaid
            isDelivered
            paidAt
            deliveredAt
            createdAt
        }
    }`
  
      const { data } = await Axios.post(
        "/graphql",
        {
          query,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      dispatch({
        type:getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_SUCCESS ,
        payload: data.data.getAllLogedInUserOrders,
      })
    } catch (error) {
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0].message
        : error.response?.data
        ? error.response?.data
        : "error happend"
      dispatch({
        type: getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_FAIL,
        payload: errorMessage,
      })
    }
  }
  
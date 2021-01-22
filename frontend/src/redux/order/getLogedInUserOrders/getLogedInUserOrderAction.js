
import Axios from "axios"
import orderTypes from "../orderTypes"
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
  

  export const delteOrderFromDatbase = (id) => async (dispatch, getState) => {
    try {
      const token = getState().userReducer.userInfo.token
      const query = `mutation {
        removeOrder(_id:"${id}"){
            _id
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
        type:getLogedInUserOrdersTypes.REMOVR_ORDER ,
        payload: data.data.removeOrder ,
      })
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data.errors
        ? error.response?.data.errors[0].message
        : error.response?.data
        ? error.response?.data
        : "error happend"
      // dispatch({
      //   type: getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_FAIL,
      //   payload: errorMessage,
      // })
    }
  }
  

  export const getOerdersForAdmin = (page=1) => async (dispatch, getState) => {
    console.log(page);
    try {
      const token = getState().userReducer.userInfo.token
      dispatch({
        type: getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_START,
      })
      const query = `query {
        getAllOrdersForAdmin( pageNumber: ${page} )
        {
            orders {
              _id
            totalPrice
            isPaid
            isDelivered
            paidAt
            deliveredAt
            createdAt
            }

            pageNumber
            pages
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
        type:getLogedInUserOrdersTypes.GET_ADMIN_ORDERS_SUCCESS ,
        payload: data.data.getAllOrdersForAdmin,
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
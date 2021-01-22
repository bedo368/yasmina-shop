import Axios from "axios"
import cartTypes from "../cart/cartTypes"
import orderTypes from "./orderTypes"

export const createOrder = (cart) => async (dispatch, getState) => {
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
    itemsPrice,
  } = cart
  try {
    const token = getState().userReducer.userInfo.token
    console.log(token)
    dispatch({
      type: orderTypes.CREATE_ORDER_START,
    })
    const query = `
      mutation CreateOrder(
        $orderItems : String!,
        $shippingAddress : String!,
        $paymentMethod : String! ,
        $taxPrice : Float!,
        $shippingPrice: Float!,
        $totalPrice: Float!,
        $itemsPrice : Float!,
        )
        {
            CreateOrder(
                orderItems : $orderItems,
                shippingAddress :  $shippingAddress,
                paymentMethod : $paymentMethod,
                taxPrice : $taxPrice,
                shippingPrice: $shippingPrice,
                totalPrice:  $totalPrice,
                itemsPrice : $itemsPrice
                 )
                {
                    _id
                    orderItems {
                      qty
                      name
                      image
                      price
                     
                    }
                   
                    paymentMethod 
                    taxPrice 
                    shippingPrice
                    totalPrice
                   
                }
        }
        `
    const orderItemsWithProductInstedOF_id = cartItems.map((item) => {
      return {
        countInStock: item.countInStock,
        image: item.image,
        name: item.name,
        price: item.price,
        qty: item.qty,
        product: item._id,
      }
    })
    const variables = {
      orderItems: JSON.stringify(orderItemsWithProductInstedOF_id),
      shippingAddress: JSON.stringify(shippingAddress),
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      itemsPrice,
    }
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: orderTypes.CREATE_ORDER_SUCCESS,
      payload: data.data.CreateOrder,
    })
    localStorage.setItem("cartItems", [])

    dispatch({
      type: cartTypes.EMPTY_CART_ITEMS,
    })
  } catch (error) {
    const errorMessage = error.response?.data.errors
      ? error.response?.data.errors[0].message
      : error.response?.data
      ? error.response?.data
      : "error happend"
    dispatch({
      type: orderTypes.CREATE_ORDER_FAIL,
      payload: errorMessage,
    })
  }
}

export const getOrderById = ({ id }) => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token
    dispatch({
      type: orderTypes.ORDER_DETAIL_START,
    })
    const query = `query getOrderById($id:String!){
      getOrderById(id:$id){
          _id
          orderItems{
              _id 
              name
              qty
              image
              price
              product{
                _id
              }
          }
          shippingAddress{
               city
               address
               postalCode
               country
            }
          itemsPrice
          paymentMethod 
          taxPrice 
          shippingPrice
          totalPrice
          orderCreator{
              _id
              name
              email
          
          }
          isPaid
          isDelivered
          paidAt
          deliveredAt
          createdAt
          updatedAt
      }
  }`

    const variables = { id }
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: orderTypes.ORDER_DETAIL_SUCCESS,
      payload: data.data.getOrderById,
    })
  } catch (error) {
    const errorMessage = error.response?.data.errors
      ? error.response?.data.errors[0].message
      : error.response?.data
      ? error.response?.data
      : "error happend"
    dispatch({
      type: orderTypes.ORDER_DETAIL_FAIL,
      payload: errorMessage,
    })
  }
}

export const updateOrderToDelvired = (id) => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token

    const query = `mutation updateOrderToDeliverd($id:String!){
      updateOrderToDeliverd(id:$id){
          _id
          orderItems{
              _id 
              name
              qty
              image
              price
              product{
                _id
              }
          }
          shippingAddress{
               city
               address
               postalCode
               country
            }
          itemsPrice
          paymentMethod 
          taxPrice 
          shippingPrice
          totalPrice
          orderCreator{
              _id
              name
              email
          
          }
          isPaid
          isDelivered
          paidAt
          deliveredAt
          createdAt
          updatedAt
      }
  }`

    const variables = { id }
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: orderTypes.ORDER_DETAIL_SUCCESS,
      payload: data.data.getOrderById,
    })
  } catch (error) {
    const errorMessage = error.response?.data.errors
      ? error.response?.data.errors[0].message
      : error.response?.data
      ? error.response?.data
      : "error happend"
    dispatch({
      type: orderTypes.ORDER_DETAIL_FAIL,
      payload: errorMessage,
    })
  }
}

import cartTypes from "./cartTypes"

export const addToCart = (product, qty) => async (dispatch, getState) => {
  const { _id, name, image, price, countInStock } = product
  dispatch({
    type: cartTypes.CART_ADD_ITEM,
    payload: {
      _id,
      name,
      image,
      price,
      countInStock,
      qty: Number(qty),
    },
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems))
}

export const removeItemFromCart = (_id) => async (dispatch, getState) => {
  dispatch({
    type: cartTypes.CART_REMOVE_ITEM,
    payload: _id,
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: cartTypes.SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savePaymentMethod = (paymentMethod) => (dispatch , getState) => {
  dispatch({
    type: cartTypes.SAVE_PAYMENT_METHOD,
    payload : paymentMethod
  })
  localStorage.setItem("paymentMethod", JSON.stringify(getState().cartReducer.paymentMethod))
}

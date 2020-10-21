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
      qty : Number (qty),
    },
  })
  localStorage.setItem("cartItems" , JSON.stringify(getState().cartReducer.cartItems))
}

export const removeItemFromCart = (_id)=>{
    return {
        type: cartTypes.CART_REMOVE_ITEM,
        payload : _id
    }
}
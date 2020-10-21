import cartTypes from "./cartTypes"
import {addItemUtalits} from "./cartUtalits"
const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): []
const intialState = {
  cartItems: cartItemsFromStorage,
}
const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case cartTypes.CART_ADD_ITEM:
      return addItemUtalits(state , action)
      break
    case cartTypes.CART_REMOVE_ITEM:
        return {...state , cartItems: state.cartItems.filter(item=>item._id !== action.payload)}
    default:
      return state
  }
}

export default cartReducer
import cartTypes from "./cartTypes"
import { addItemUtalits } from "./cartUtalits"
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : null
const intialState = {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage,
}

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case cartTypes.CART_ADD_ITEM:
      return addItemUtalits(state, action)
      break
    case cartTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      }
    case cartTypes.SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload }
    case cartTypes.SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload }
    default:
      return state
  }
}

export default cartReducer

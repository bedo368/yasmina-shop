import { combineReducers } from "redux"
import productsReducer from "./products/productsReducer"
import productReducer from "./product/productReducer"
import cartReducer from "./cart/cartReducer"
import userReducer from "./user/userReducer"
import orderReducer from "./order/orderReducer"
import userProfileReducer from "./user/userProfile/userProfileReducer"
import orderPayReducer from "./order/orderPay/orderPayReducer"
import getLogedInUserOrdersReducer from "./order/getLogedInUserOrders/getLogedInUserOrdersReducer"
const rootReducer = combineReducers({
  productsReducer: productsReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
  userProfileReducer: userProfileReducer,
  orderReducer: orderReducer,
  orderPayReducer: orderPayReducer,
  getLogedInUserOrdersReducer: getLogedInUserOrdersReducer,
})
export default rootReducer

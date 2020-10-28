import { combineReducers } from "redux"
import productsReducer from "./products/productsReducer"
import productReducer from "./product/productReducer"
import cartReducer from "./cart/cartReducer"
import userReducer from "./user/userReducer"
import userProfileReducer from "./user/userProfile/userProfileReducer"
const rootReducer = combineReducers({
  productsReducer: productsReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
  userReducer: userReducer,
  userProfileReducer: userProfileReducer,
})
export default rootReducer

import productTypes from "./productTypes"

const INTIAL_STATE = { product: {} , loading: false, errMessage: "" }

const productReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCT_START:
      return { ...state, loading: true }
    case productTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload, errMessage: null }

    case productTypes.FETCH_PRODUCT_FAIL:
      return { ...state, loading: false, errMessage: action.payload }
    default:
      return state
  }
}
export default productReducer

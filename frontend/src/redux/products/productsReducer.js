import productTypes from "./productsTypes"

const INTIAL_STATE = { products : null , loading: false, errMessage: "" }

const productReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return { ...state, loading: true }
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload, errMessage: null }

    case productTypes.FETCH_PRODUCTS_FAIL:
      return { ...state, loading: false, errMessage: action.payload }
    default:
      return state
  }
}
export default productReducer

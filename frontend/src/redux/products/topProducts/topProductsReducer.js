import topProductTypes from "./topProductTypesTtypes"



const INTIAL_STATE = { products: null, loading: false, errMessage: "" }

const topProductReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case topProductTypes.FETCH_TOP_PRODUCTS_START:
      return { ...state, loading: true }
    case topProductTypes.FETCH_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,

        loading: false,
        products: action.payload,
        errMessage: null,
      }

    case topProductTypes.FETCH_TOP_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errMessage: action.payload,
        products: [],
      }
    // remove product
  


    default:
      return state
  }
}
export default topProductReducer

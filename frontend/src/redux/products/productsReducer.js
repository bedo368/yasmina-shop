import productsTypes from "./productsTypes"
import productTypes from "./productsTypes"

const INTIAL_STATE = { products: null, loading: false, errMessage: "" }

const productReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_START:
      return { ...state, loading: true }
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,

        loading: false,
        products: action.payload.products,
        errMessage: null,
        pages: action.payload.pages,
        pageNumber: action.payload.pageNumber,
      }

    case productTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,

        loading: false,
        errMessage: action.payload,
        products: [],
      }
    // remove product
    case productsTypes.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,

        products: state.products.filter((p) => p._id !== action.payload._id),
        removeProductError: null,
      }
    case "FETCH_MYADMIN_PRODUCTS":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages : action.payload.pages,
        errMessage: null,
        pageNumber :action.payload.pageNumber
      }
    case productsTypes.REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        removeProductError: action.payload,
      }

    default:
      return state
  }
}
export default productReducer

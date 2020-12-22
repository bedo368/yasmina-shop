import productTypes from "./productTypes"

const INTIAL_STATE = { product: {}, loading: false, errMessage: "" ,createProductState:false}

const productReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCT_START:
      return { ...state, loading: true , createProductState:false}
    case productTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        errMessage: null,
        createProductState : false
      }
    case productTypes.CREATE_NEW_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        createProductState : true,
        loading: false,
        product: action.payload,
        errMessage: null,
      }
    case productTypes.CLEAR_PRODUCT :
      return INTIAL_STATE
    case productTypes.FETCH_PRODUCT_FAIL:
      return { ...state, loading: false, errMessage: action.payload,createProductState : false }
    default:
      return state
  }
}
export default productReducer

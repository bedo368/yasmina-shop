import productTypes from "./productTypes"

const INTIAL_STATE = { product: {}, loading: false, errMessage: "" ,createProductState:false  , getState : false , productUpdated:false}

const productReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCT_START:
      return { ...state, loading: true , createProductState:false,errMessage: ""}
    case productTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        errMessage: null,
        createProductState : false,
        getState : true,
        productUpdated:false
      }
    case productTypes.CREATE_NEW_PRODUCT:
      return {
        ...state,
        createProductState : true,
        loading: false,
        product: action.payload,
        errMessage: null,
        productUpdated:false
      }
    case productTypes.UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        productUpdated:true
      }
    case productTypes.CLEAR_PRODUCT :
      return INTIAL_STATE
    case productTypes.FETCH_PRODUCT_FAIL:
      return { ...state, loading: false, errMessage: action.payload,createProductState : false ,productUpdated:false }
    case "CLEAR_ERROR_MASSAGE":
      return{...state, errMessage:undefined , productUpdated:false}
    default:
      return state
  }
}
export default productReducer

import orderPayTypes from "./orderPayTypes"

const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case orderPayTypes.ORDER_PAY_START:
      return {
        loadingPay: true,
      }
    case orderPayTypes.ORDER_PAY_SUCCESS:
      console.log("ssss");
      return {
        loadingPay: false,
        successPay: true, 
      }
    case orderPayTypes.ORDER_PAY_FAIL:
      return {
        loadingPay: false,
        error: action.payload,
      }
    case orderPayTypes.ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}

export default orderPayReducer
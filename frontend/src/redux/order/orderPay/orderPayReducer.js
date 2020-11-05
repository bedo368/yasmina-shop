import orderPayTypes from "./orderPayTypes"

const orderPayReducer = (state = {}, action) => {
  switch (action.payload) {
    case orderPayTypes.ORDER_PAY_START:
      return {
        loading: true,
      }
    case orderPayTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case orderPayTypes.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case orderPayTypes.ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}

export default orderPayReducer
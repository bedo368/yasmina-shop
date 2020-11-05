import orderTypes from "./orderTypes"

const orderReducer = (
  state = { orderDetail: null, orderDetailFetchState: true },
  action
) => {
  switch (action.type) {
    case orderTypes.CREATE_ORDER_START:
      return { fetchOrderState: true }
    case orderTypes.CREATE_ORDER_SUCCESS:
      return {
        fetchOrderState: false,
        success: true,
        orders: action.payload,
      }
    // order detail reducer

    case orderTypes.ORDER_DETAIL_START:
      return { orderDetailFetchState: true }
    case orderTypes.ORDER_DETAIL_SUCCESS:
      return {
        orderDetailFetchState: false,
        orderDetail: action.payload,
      }
    case orderTypes.ORDER_DETAIL_FAIL:
      return {
        orderDetailFetchState: false,
        orderDetailErrorMassge: action.payload,
      }

    default:
      return state
  }
}

export default orderReducer

import getLogedInUserOrdersTypes from "./getLogedInUserOrdersTypes"

const getLogedInUserOrdersReducer = (
  state = { LogedInUserOrdersFetchState: true },
  action
) => {
  switch (action.type) {
    case getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_START:
      return { LogedInUserOrdersFetchState: true }
    case getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_SUCCESS:
      return { LogedInUserOrdersFetchState: false, ordersList: action.payload }
    case getLogedInUserOrdersTypes.GET_LOGED_IN_USER_ORDERS_FAIL:
      return {
        LogedInUserOrdersFetchState: false,
        LogedInUserErrorMessage: action.payload,
      }
      case getLogedInUserOrdersTypes.REMOVR_ORDER:
        return{ ...state , ordersList : state.ordersList.filter((order) => String(order._id) !== String(action.payload._id))}
    default:
      return state
  }
}

export default getLogedInUserOrdersReducer

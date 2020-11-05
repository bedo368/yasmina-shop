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
    default:
      return state
  }
}

export default getLogedInUserOrdersReducer

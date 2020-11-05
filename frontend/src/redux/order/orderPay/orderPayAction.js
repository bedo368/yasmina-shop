import orderPayTypes from "./orderPayTypes"
export const orderPay = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    const token = getState().userReducer.userInfo.token
    dispatch({
      type: orderPayTypes.ORDER_PAY_START,
    })
    const query = `mutation updateOrderToPaid($orderId:String! ,$orderResult:String!){
        updateOrderToPaid(orderId:$orderId orderResult:$orderResult ){
            _id
        }
      }`

    const variables = { id }
    const { data } = await Axios.post(
      "/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: orderPayTypes.ORDER_PAY_SUCCESS,
      payload: data.data.getOrderById,
    })
  } catch (error) {
    const errorMessage = error.response?.data.errors
      ? error.response?.data.errors[0].message
      : error.response?.data
      ? error.response?.data
      : "error happend"
    dispatch({
      type: orderPayTypes.ORDER_PAY_FAIL,
      payload: errorMessage,
    })
  }
}

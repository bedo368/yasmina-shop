import Axios from "axios"
import React, { useEffect, useState } from "react"
import { PayPalButton } from "react-paypal-button-v2"
import { Col, ListGroup, Row, Image, Card, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import { getOrderById } from "../../redux/order/orderAction"

const OrderPage = ({ match }) => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.orderReducer)
  const { orderDetail, orderDetailFetchState, orderDetailErrorMassge } = order
  const [sdkReady, setSdkReady] = useState(false)
  const orderPay = useSelector((state) => state.orderPayReducer)
  const { loading: loadingPay, success: successPay } = orderPay

  useEffect(() => {
    // const addPaypalScript = async () => {
    //   const  {data}  = await Axios.get("/api/config/paypal")
    //   const script = document.createElement("script")
    //   script.type = "text/javascript"
    //   script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
    //   script.async = true

    //   script.onload = () => {
    //     setSdkReady(true)
    //   }
    //   document.body.appendChild(script)
    // }
    dispatch(getOrderById({ id: match.params.id }))
    // if (successPay || !orderDetail) {
    //   // if (!window.paypal) {
    //   //   addPaypalScript()
    //   // } else {
    //   //   setSdkReady(true)
    //   // }
    // }
  }, [match.params.id, dispatch])
  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
  }

  return orderDetailFetchState ? (
    <Loader />
  ) : orderDetailErrorMassge ? (
    <Message variant="danger">{orderDetailErrorMassge} </Message>
  ) : (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {orderDetail?.orderCreator?.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${orderDetail?.orderCreator?.email}`}>
                  {" "}
                  {orderDetail?.orderCreator.email}
                </a>
              </p>
              <p>
                {" "}
                <strong>Address: </strong>
                {orderDetail?.shippingAddress?.address} ,{" "}
                {orderDetail?.shippingAddress?.city} ,{" "}
                {orderDetail?.shippingAddress?.postalCode},
                {orderDetail?.shippingAddress?.country}
              </p>

              {orderDetail?.isDeliverd ? (
                <Message variant="success">
                  paid on {orderDetail?.deliverdAt}{" "}
                </Message>
              ) : (
                <Message variant="danger">not deliverd</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>payment Method</h2>
              <p>
                <strong>method: </strong>
                {orderDetail?.paymentMethod}
              </p>
              {orderDetail?.isPaid ? (
                <Message variant="success">
                  paid on {orderDetail?.paidAt}{" "}
                </Message>
              ) : (
                <Message variant="danger">not paid</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {orderDetail?.orderItems?.length === 0 ? (
              <Message>your cart is empty</Message>
            ) : (
              <ListGroup variant="flush">
                {orderDetail?.orderItems?.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product._id}`}>
                          {" "}
                          {item.name}{" "}
                        </Link>
                      </Col>
                      <Col>
                        {item.qty} x {item.price} = {item.qty * item.price}$
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items Price</Col>
                  <Col> ${orderDetail?.itemsPrice} </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${orderDetail?.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${orderDetail?.taxPrice} </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>total</Col>
                <Col>${orderDetail?.totalPrice} </Col>
              </Row>
            </ListGroup.Item>
            {!orderDetail?.isPaid && (
              <ListGroup>
                <Form
                  className="m-auto"
                  target="paypal"
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    name="hosted_button_id"
                    type="hidden"
                    value={orderDetail?.totalPrice}
                  />
                  <input
                    alt="PayPal - The safer, easier way to pay online!"
                    name="submit"
                    src="https://www.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif"
                    type="image"
                  />
                  <img
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    border="0"
                    alt=""
                    width="1"
                    height="1"
                  />
                </Form>
              </ListGroup>
            )}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderPage

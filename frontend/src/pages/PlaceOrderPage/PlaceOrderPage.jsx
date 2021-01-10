import React, { useEffect } from "react"
import { Col, ListGroup, Row, Image, Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Message from "../../components/message/Message"
import { createOrder } from "../../redux/order/orderAction"

const PlaceOrderPage = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer)
  const order = useSelector((state) => state.orderReducer)
  const { shippingAddress, paymentMethod, cartItems } = cart
  if (!shippingAddress) {
    history.push("/shipping")
  } else if (!paymentMethod) {
    history.push("/payment")
  }
  const placeOrderHandler = (e) => {
    dispatch(createOrder(cart))
  }
  useEffect(() => {
    if (order.success) {
      history.push(`/order/${order.orders._id}`)
    }
  }, [order.success])
  // calclute price
  cart.itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  cart.shippingPrice = cart.itemPrices > 100 ? 0 : 40
  cart.taxPrice = Number(0.15 * cart.itemsPrice)
  cart.totalPrice = Number(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)
  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <strong>Address: </strong>
              {shippingAddress?.address} , {shippingAddress?.city} ,{" "}
              {shippingAddress?.postalCode},{shippingAddress?.country}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>payment Method</h2>
              <strong>method: </strong>
              {paymentMethod}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {cartItems.length === 0 ? (
              <Message>your cart is empty</Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} fluid rounded />
                      </Col>
                      <Col>
                        <Link to={`/product/${item._id}`}> {item.name} </Link>
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
                  <Col> ${cart.itemsPrice} </Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice} </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>total</Col>
                <Col>${cart.totalPrice} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0 || !shippingAddress || !paymentMethod}
                onClick={placeOrderHandler}
              >
                payment{" "}
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderPage

import React from "react"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { addToCart,removeItemFromCart } from "../../redux/cart/cartAction"
import { Link } from "react-router-dom"
import Message from "../../components/message/Message"
const CartPage = ({ match, location, history }) => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cartReducer)
  const removeFromCartHandler = (id) => {
      dispatch(removeItemFromCart(id))
  }
  const checkoutHandler = ()=>{
      history.push("/login?redirect=shipping")
  }
  return (
    <Row>
      <Col md={8}>
        <h1 className="py-2">Shoping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty <Link to="/">Go back </Link>{" "}
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} >${item.price} </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(addToCart(item, e.target.value))
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} >
                    <Button
                    style={{width:"100%"}}
                      type="button"
                      variant="danger"
                      onClick={() => {
                        removeFromCartHandler(item._id)
                      }}
                    >
                      {" "}
                      <i className="fas fa-trash  " style={{width:"100%"}}></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>
                {" "}
                subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items{" "}
              </h3>
              <h5 className="py-2">
                {" "}
                total {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}${" "}
              </h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Procced To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage

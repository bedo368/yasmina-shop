import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Form, Image, ListGroup, Row } from "react-bootstrap"
import Rating from "../../components/Ratiing/Rating"
import { useState, useEffect } from "react"
import { fetchProductAscync } from "../../redux/product/productAction"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import { addToCart } from "../../redux/cart/cartAction"
const ProductPage = ({ match, history }) => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.productsReducer)
  const productFromRedux = useSelector((state) => state.productReducer)
  const { loading, errMessage } = productFromRedux
  const [qty, setQty] = useState(1)
  const [product, setProduct] = useState({})
  useEffect(() => {
    dispatch({ type: "CLEAR_ERROR_MASSAGE" })
    if (products === null) {
      dispatch(fetchProductAscync(match.params.id))
    }
    if (products !== null) {
      setProduct(products.find((p) => p._id === match.params.id))
    }
  }, [dispatch])
  useEffect(() => {
    if (products === null) {
      setProduct(productFromRedux.product)
    }
  }, [productFromRedux, productFromRedux.product])

  const addToCartHandeler = () => {
    if (qty !== 0) {
      dispatch(addToCart(product, qty))
      history.push(`/cart/${product._id}?qty=${qty}`)
    }
  }

  return (
    <div className="productPage">
      <Button
        className="btn btn-light my-3"
        onClick={() => {
          history.goBack()
        }}
      >
        Go Back
      </Button>
      {loading ? (
        <Loader />
      ) : errMessage ? (
        <Message>{errMessage} </Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={product?.image}
              alt={product?.name}
              fluid
              style={{ maxHeight: "500px", boxShadow: "2px 2px 20px" }}
            />
          </Col>
          <Col md={3}>
            <ListGroup.Item>
              <h3>{product?.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product?.rating}
                text={`${product?.numReviews} reviews `}
              />
            </ListGroup.Item>
            <ListGroup.Item>price : {product?.price}<small>L.E</small></ListGroup.Item>
            <ListGroup.Item>
              Description : {product?.description}
            </ListGroup.Item>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup.Item varient="flush">
                <Row>
                  <Col>price</Col>
                  <Col>
                    <strong> ${product?.price} <small>L.E</small> </strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
            </Card>
            <Card>
              <ListGroup.Item varient="flush">
                <Row>
                  <Col>Stauts</Col>
                  <Col>
                    {product?.countInStock > 0 ? "in stock" : "outof stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
            </Card>

            <Card>
              {product?.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value)
                        }}
                      >
                        {[...Array(product?.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandeler}
                  className="btn-block"
                  type="button"
                  disabled={product?.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductPage

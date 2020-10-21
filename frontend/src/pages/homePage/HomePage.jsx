import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Product from "../../components/Product/product"
import { fetchProductsAscync } from "../../redux/products/productsAction"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
const HomePage = () => {
  const dispatch = useDispatch()
  const { products, loading, errMessage } = useSelector((state) => state.productsReducer)
  useEffect(() => {
    dispatch(fetchProductsAscync())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : errMessage ? (
        <Message variant="danger"> {errMessage} </Message>
      ) : (
        <Row>
          {products?.map((product) => {
            return (
              <Col key={product._id} sm={12} lg={3} md={6}>
                <Product product={product} />
              </Col>
            )
          })}
        </Row>
      )}
    </>
  )
}

export default HomePage

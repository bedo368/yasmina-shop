import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Product from "../../components/Product/product"
import { fetchProductsAscync } from "../../redux/products/productsAction"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import Paginate from "../../components/paginate/paginate"
import ProductCurcusal from "../../components/productCurcusal/ProductCurcusal"
const HomePage = ({ match }) => {
  const dispatch = useDispatch()
  const { products, loading, errMessage, pages, pageNumber } = useSelector(
    (state) => state.productsReducer
  )
  useEffect(() => {
    dispatch(
      fetchProductsAscync(
        match.params.keyword,
        Number(match.params.pageNumber) || 1
      )
    )
  }, [dispatch, match.params.keyword, match.params.pageNumber])

  return (
    <>
    {!match.params.keyword && <ProductCurcusal />}
      {loading ? (
        <Loader />
      ) : errMessage ? (
        <Message variant="danger"> {errMessage} </Message>
      ) : (
        <div style={{ width: "100%" }}>
          <Row style={{  display:"flex" , alignItems:"center" , justifyItems :"center"}}>
            {products?.map((product) => {
              return (
                <Col key={product._id} sm={12} lg={3} md={6}   style={{   alignSelf :"center"}}>
                  <Product product={product} />
                </Col>
              )
            })}
          </Row>
          <Container style={{width:"100%" , display:"flex" , }}>
            <Paginate
              style={{  alignSelf: "center"
}}
              pages={pages}
              page={pageNumber}
              keyword={match.params.keyword ? match.params.keyword : ""}
            ></Paginate>
          </Container>
        </div>
      )}
    </>
  )
}

export default HomePage

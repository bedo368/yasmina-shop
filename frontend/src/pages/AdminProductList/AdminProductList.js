import React, { useEffect } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import Paginate from "../../components/paginate/paginate"
import {
  fetchProductsAscync,
  removeProductById,
  fetchAdminProducts,
} from "../../redux/products/productsAction"

const AdminProductList = ({ history, match }) => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userReducer)
  const {
    loading,
    products,
    errMessage,
    removeProductError,
    pages,
    pageNumber,
  } = useSelector((state) => state.productsReducer)

  const deleteHandler = (productId) => {
    if (window.confirm("are you sure")) {
      dispatch(removeProductById({ id: productId }))
    }
  }
  const createProductHandler = () => {
    history.push("/create/product")
  }
  dispatch({ type: "CLEAR_PRODUCT" })
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(fetchAdminProducts(match.params.pagenumber))
    } else {
      history.push("/login")
    }
  }, [dispatch, userInfo, match.params.pagenumber])
  return (
    <>
      {removeProductError && (
        <Message variant="danger">{removeProductError}</Message>
      )}
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"> </i> Create Product
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : errMessage ? (
        <Message variant="danger">{errMessage}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>ID</th>
            <th>name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <td> {product._id}</td>
                <Link to={`/product/${product._id}`}>
                  {" "}
                  <td> {product.name}</td>
                </Link>

                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <Button
                    className="btn-sm btn-light"
                    onClick={() => {
                      history.push(`/admin/updateproduct/${product._id}`)
                    }}
                  >
                    <i className="fas fa-edit mx-1"></i>
                  </Button>
                  <Button
                    variant="danger"
                    className="btn-sm mx-1"
                    onClick={() => {
                      deleteHandler(product._id)
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Container style={{ width: "100%", display: "flex" }}>
        <Paginate
          style={{ alignSelf: "center" }}
          isAdmin={true}
          pages={pages}
          page={pageNumber}
          keyword={match.params.keyword ? match.params.keyword : ""}
        ></Paginate>
      </Container>
    </>
  )
}

export default AdminProductList

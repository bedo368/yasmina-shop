import React, { useEffect } from "react"
import { Button, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import {
  fetchProductsAscync,
  removeProductById,
  fetchAdminProducts,
} from "../../redux/products/productsAction"

const AdminProductList = ({ history }) => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userReducer)
  const { loading, products, errMessage, removeProductError } = useSelector(
    (state) => state.productsReducer
  )

  const deleteHandler = (productId) => {
    if (window.confirm("are you sure")) {
      dispatch(removeProductById({ id: productId }))
    }
  }
  const createProductHandler = () => {
    history.push("/create/product")
  }
  dispatch({type:"CLEAR_PRODUCT"})
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(fetchAdminProducts())
    } else {
      history.push("/login")
    }
  }, [dispatch, userInfo])
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
    </>
  )
}

export default AdminProductList

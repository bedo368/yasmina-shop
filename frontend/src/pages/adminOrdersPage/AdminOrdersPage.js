import React, { useEffect } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"

import {
  delteOrderFromDatbase,
  getOerdersForAdmin,
} from "../../redux/order/getLogedInUserOrders/getLogedInUserOrderAction"
import Paginate from "../../components/paginate/paginate"

const AdminOrdersPage = ({ history, match }) => {
  const dispatch = useDispatch()

  const {
    LogedInUserOrdersFetchState,
    ordersList,
    LogedInUserErrorMessage,
    pageNumber,
    pages
  } = useSelector((state) => state.getLogedInUserOrdersReducer)

  // const redirect = location.search ? location.search.split("=")[1] : "/"
  const delteOrder = (id) => {
    dispatch(delteOrderFromDatbase(id))
  }
  const { userInfo } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (!userInfo) {
      history.push("/")
    }
    console.log(match)
    dispatch(getOerdersForAdmin(match.params.pageNumber))
  }, [dispatch, userInfo, match.params.pageNumber])

  return (
    <Container style={{justifyContent:"center"}}>
      <Row>
        <Col>
          {LogedInUserOrdersFetchState ? (
            <Loader />
          ) : LogedInUserErrorMessage ? (
            <Message variant="danger">{LogedInUserErrorMessage}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Deliverd </th>
                <th></th>
              </thead>
              <tbody>
                {ordersList.map((order) => (
                  <tr key={order._id}>
                    <td>{ new Date(JSON.parse(order?.createdAt)).toUTCString()  }</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        new Date(JSON.parse(order?.paidAt)).toUTCString()
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        new Date(JSON.parse(order?.deliveredAt)).toUTCString()
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {" "}
                      <Button
                        onClick={() => {
                          history.push(`/order/${order._id}`)
                        }}
                        className="btn-sm"
                        variant="info"
                      >
                        more detail
                      </Button>{" "}
                      <Button
                        onClick={() => {
                          delteOrder(order._id)
                        }}
                        className="btn-sm"
                        variant="danger"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <Paginate
        style={{ alignSelf: "center" }}
        pages={pages}
        page={pageNumber} 
        order={true}
      ></Paginate>
    </Container>
  )
}

export default AdminOrdersPage

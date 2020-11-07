import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"

import { getLogedInUserOrders } from "../../redux/order/getLogedInUserOrders/getLogedInUserOrderAction"

const UserOrderPage = ({ location, history }) => {
  const dispatch = useDispatch()

  const {
    LogedInUserOrdersFetchState,
    ordersList,
    LogedInUserErrorMessage,
  } = useSelector((state) => state.getLogedInUserOrdersReducer)

  const redirect = location.search ? location.search.split("=")[1] : "/"

  const { userInfo } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (!userInfo) {
      history.push("/")
    }
    dispatch(getLogedInUserOrders())
  }, [dispatch, userInfo])

  return (
    <Row>
      <Col>
        {LogedInUserOrdersFetchState ? (
          <Loader />
        ) : LogedInUserErrorMessage ? (
          <Message variant="danger">{LogedInUserErrorMessage}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Deliverd </th>
              <th></th>
            </thead>
            <tbody>
              {ordersList.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{Date(order.createdAt).substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      Date(order.paidAt).substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      Date(order.deliveredAt).substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default UserOrderPage

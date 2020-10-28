import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import FormContainer from "../../components/FormContainer/FormContainer"
import { login } from "../../redux/user/userAction"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"
const LoginPage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { userInfo, errorMassage, fetchState } = useSelector((state) => state.userReducer)
  const [userInfoInput, setUserInfo] = useState({ rmail: "", password: "" })
  const { email, password } = userInfoInput
  const redirect = location.search ? location.search.split("=")[1] : "/"
  const userInfoChange = (event) => {
    const { name, value } = event.target
    setUserInfo((preval) => {
      return { ...preval, [name]: value }
    })
  }
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, redirect, userInfo])
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
      <h1>Sign in</h1>
      {errorMassage && <Message variant="danger">{errorMassage} </Message>}
      {fetchState && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={userInfoChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={userInfoChange}
            required
          />
        </Form.Group>
        <Button type="submit"> Sign In</Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage

import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import FormContainer from "../../components/FormContainer/FormContainer"
import { register } from "../../redux/user/userAction"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"
const RegisterPage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { userInfo, errorMassage, fetchState } = useSelector((state) => state.userReducer)
  const [userInfoInput, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  })
  const [message, setMessage] = useState(null)
  const { email, password, name, confirmPassword } = userInfoInput
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
    if (password !== confirmPassword) {
      setMessage("password did't match ")
      return
    }
    setMessage(null)
    dispatch(register(name, email, password))
  }
  return (
    <FormContainer>
      <h1>Sign up</h1>
      { message ? <Message variant="danger">{message} </Message> : errorMassage && <Message variant="danger">{errorMassage} </Message>}
      {fetchState && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={userInfoChange}
            required
          />
        </Form.Group>
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
        <Form.Group controlId="confirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={userInfoChange}
            required
          />
        </Form.Group>
        <Button type="submit"> Sign In</Button>
      </Form>
      <Row className="py-3">
        <Col>
          have account{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            signIn
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterPage

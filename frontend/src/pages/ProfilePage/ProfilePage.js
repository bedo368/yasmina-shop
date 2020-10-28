import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"
import { getUserProfile,updateUserProfile } from "../../redux/user/userProfile/userProfileAction"

const ProfilePage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userReducer)
  const {
    userProfileInfo,
    getUserProlieFetchState,
    userProfileErrorMessage,
  } = useSelector((state) => state.userProfileReducer)
  const [userInfoInput, setUserInfo] = useState({
    email: "",
    newPassword: "",
    name: "",
    oldPassword: "",
  })
  const { email, newPassword, name, oldPassword } = userInfoInput
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const userInfoChange = (event) => {
    const { name, value } = event.target
    setUserInfo((preval) => {
      return { ...preval, [name]: value }
    })
  }
  useEffect(() => {
    if (!userProfileInfo.name) {
      if (userInfo) {
        dispatch(getUserProfile())
      }
    }else{
      setUserInfo(preval => ({...preval,email:userProfileInfo.email , name : userProfileInfo.name }) )
    }
  }, [userInfo , userProfileInfo , dispatch , ProfilePage  ])
  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo])
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(updateUserProfile(name,email ,newPassword, oldPassword ))

  }
  return (
    <Row>
      <Col md={3}>
        <h2> User Profile </h2>
        {userProfileErrorMessage ? (
          <Message variant="danger">{userProfileErrorMessage} </Message>
        ) : (
          userProfileErrorMessage && (
            <Message variant="danger">{userProfileErrorMessage} </Message>
          )
        )}
        {getUserProlieFetchState && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={userInfoChange}
              
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
              
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>newPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter newPassword"
              name="newPassword"
              value={newPassword}
              onChange={userInfoChange}
              
            />
          </Form.Group>
          <Form.Group controlId="oldPassword">
            <Form.Label>oldPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={userInfoChange}
              required
            />
          </Form.Group>
          <Button type="submit"> update</Button>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Row>
  )
}

export default ProfilePage

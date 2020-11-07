import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"
import {
  getUserProfile,
  updateUserProfile,
} from "../../redux/user/userProfile/userProfileAction"
const ProfilePage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userReducer)
  const {
    userProfileInfo,
    getUserProlieFetchState,
    userProfileErrorMessage,
  } = useSelector((state) => state.userProfileReducer)

  const [editProfile, setEditProfile] = useState(false)
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
    
    if (!userProfileInfo?.name) {
      if (userInfo) {
        dispatch(getUserProfile())
      }
    } else {
      setUserInfo((preval) => ({
        ...preval,
        email: userProfileInfo.email,
        name: userProfileInfo.name,
      }))
    }
    if(!userInfo){
      history.push("/")
    }
  }, [userInfo, userProfileInfo, dispatch, ProfilePage])
  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo])

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(updateUserProfile(name, email, newPassword, oldPassword))
    setEditProfile(false)
  }
  return (
    <div>
      {editProfile ? (
        <Row>
          <Col md={6}>
            <Button
              variant="info"
              className="mt-2"
              type="button"
              onClick={() => {
                history.push("/user/orders")
              }}
            >
              {" "}
              My Orders
            </Button>
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
        </Row>
      ) : (
        <Row>
          <Col md={6} className="pt-5">
            <Button
              variant="info"
              className="mt-2"
              type="button"
              onClick={() => {
                history.push("/user/orders")
              }}
            >
              {" "}
              My Orders
            </Button>
            <h2> User Profile </h2>
            {userProfileErrorMessage ? (
              <Message variant="danger">{userProfileErrorMessage} </Message>
            ) : (
              userProfileErrorMessage && (
                <Message variant="danger">{userProfileErrorMessage} </Message>
              )
            )}

            {getUserProlieFetchState && <Loader />}
            <div className="pt-5">
              <h4>
                {" "}
                <strong>Name:</strong> {name}{" "}
              </h4>

              <h4>
                {" "}
                <strong>Email:</strong> {email}{" "}
              </h4>

              <Button
                className="mt-2"
                type="button"
                onClick={() => {
                  setEditProfile(true)
                }}
              >
                {" "}
                EDIT
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProfilePage

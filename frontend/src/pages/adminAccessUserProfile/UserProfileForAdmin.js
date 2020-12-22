import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/message/Message"
import Loader from "../../components/loader/Loader"
import {
  getUserProfileForAdmin,
  updateUserProfileForAdmin,
} from "../../redux/user/admin/adminAction"
import { Link } from "react-router-dom"
import FormContainer from "../../components/FormContainer/FormContainer"
const UserProfileForAdmin = ({ match ,history }) => {
  const dispatch = useDispatch()
  const { UserForAdminError, getUserFetchState, UserForAdmin , updateUserState ,updateUserSuccess} = useSelector(
    (state) => state.adminReducer
  )

  const [userInfoInput, setUserInfo] = useState({
    email: "",
    name: "",
    adminPassword: "",
  })
  const [isAdmin, setIsAdmin] = useState(false)
  const { email, name, adminPassword } = userInfoInput

  const userInfoChange = (event) => {
    const { name, value } = event.target
    setUserInfo((preval) => {
      return { ...preval, [name]: value }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(
      updateUserProfileForAdmin({
        name,
        email,
        adminPassword,
        id: match.params.userid,
        isAdmin,
      })
    )
  }
  useEffect(() => {
    if (!UserForAdmin?.name && !updateUserState ) {
      dispatch(getUserProfileForAdmin(match.params.userid))
    } else {
      setUserInfo((preval) => ({
        ...preval,
        email: UserForAdmin?.email,
        name: UserForAdmin?.name,
      }))
      setIsAdmin(UserForAdmin?.isAdmin)
    }
  }, [UserForAdmin  , dispatch ])
  useEffect(() => {
    if(updateUserSuccess){
        history.push("/admin/userlist")
    }
      setUserInfo((preval) => ({
        ...preval,
        email: UserForAdmin?.email,
        name: UserForAdmin?.name,
      }))
      setIsAdmin(UserForAdmin?.isAdmin)
    
  }, [ updateUserState ,updateUserSuccess   ])
  
  return (
    <FormContainer>
      <Link to={`/admin/userlist`} className="btn btn-light my-3">
        {" "}
        Go Back
      </Link>
      {getUserFetchState ? (
        <Loader />
      ) : UserForAdminError ? (
        <Message variant="danger">{UserForAdminError}</Message>
      ) : (
        <Row>
          <Col md={12}>
            <h2> Edit User </h2>

            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter user name"
                  name="name"
                  value={name}
                  onChange={userInfoChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter user email"
                  name="email"
                  value={email}
                  onChange={userInfoChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Check
                  type="checkbox"
                  label="Is Admin"
                  name="isAdmin"
                  checked={isAdmin}
                  onChange={(e) => {
                    setIsAdmin(e.target.checked)
                  }}
                />
              </Form.Group>
              <Form.Group controlId="adminPassword">
                <Form.Label>Enter your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="adminPassword"
                  value={adminPassword}
                  onChange={userInfoChange}
                  required
                />
              </Form.Group>
              <Button type="submit"> update</Button>
            </Form>
          </Col>
        </Row>
      )}
    </FormContainer>
  )
}

export default UserProfileForAdmin

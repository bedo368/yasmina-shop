import React, { useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../components/loader/Loader"
import Message from "../../components/message/Message"
import {
  getUsersForAdmin,
  removeUserFromUsersList,
} from "../../redux/user/admin/adminAction"

const UsersListPage = ({ history }) => {
  const dispatch = useDispatch()
  const {
    usersList,
    usersFetchState,
    usersListErrorMessage,
    deleteUserErrorMessage,
  } = useSelector((state) => state.adminReducer)
  const { userInfo } = useSelector((state) => state.userReducer)

  const deleteHandler = (userId) => {
    dispatch(removeUserFromUsersList(userId))
  }
  useEffect(() => {
    if (!userInfo) {
      history.push("/")
    }
    if (userInfo) {
      dispatch(getUsersForAdmin())
    }
  }, [dispatch, userInfo])
  return (
    <>
      {deleteUserErrorMessage && (
        <Message variant="danger">{deleteUserErrorMessage}</Message>
      )}

      <h1>users</h1>
      {usersFetchState ? (
        <Loader />
      ) : usersListErrorMessage ? (
        <Message variant="danger">{usersListErrorMessage}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>Admin</th>
            <th></th>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user._id}>
                <td> {user._id}</td>
                <td> {user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                </td>
                <td>
                  {" "}
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Button
                    className="btn-sm"
                    onClick={() => {
                      history.push(`/admin/${user._id}/edit`)
                    }}
                  >
                    <i className="fas fa-edit mx-1"></i>
                  </Button>
                  <Button
                    className="btn-sm mx-1"
                    onClick={() => {
                      deleteHandler(user._id)
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

export default UsersListPage

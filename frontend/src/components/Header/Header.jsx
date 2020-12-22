import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/user/userAction"

const Header = () => {
  const { userInfo } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
      <Navbar bg="dark" className="py-1" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/user/orders">
                    <NavDropdown.Item>My orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>sign in</Nav.Link>
                </LinkContainer>
              )}
              {userInfo?.isAdmin && (
                <NavDropdown title="admin" >
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users list</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productslist">
                    <NavDropdown.Item>Products List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Order List</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

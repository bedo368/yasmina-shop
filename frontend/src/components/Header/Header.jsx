import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/user/userAction"
import SearchBox from "../searchBox/SearchBox"
import { Route } from "react-router-dom"
const Header = () => {
  const { userInfo } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="bg-dark">
      <Navbar
        bg="dark"
        className="pb-3 pt-1"
        variant="dark"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="brand-style">
              <img
                src="favicon.png"
                style={{ width: "30px", margin: "0" }}
              ></img>
              Yasmina
            </Navbar.Brand>
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
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>sign in</Nav.Link>
                </LinkContainer>
              )}
              {userInfo?.isAdmin && (
                <NavDropdown title="admin">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users list</NavDropdown.Item>
                  </LinkContainer>
                  {userInfo?.isOwner && (
                    <LinkContainer to="/owner/productslist">
                      <NavDropdown.Item> all Products List</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <LinkContainer to="/admin/productslist">
                    <NavDropdown.Item>My Products List</NavDropdown.Item>
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
      <Container>
        <Route render={({ history }) => <SearchBox history={history} />} />
      </Container>
    </div>
  )
}

export default Header

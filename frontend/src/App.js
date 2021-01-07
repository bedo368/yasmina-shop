import React from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Container } from "react-bootstrap"
import HomePage from "./pages/homePage/HomePage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductPage from "./pages/porductPage/ProductPage"
import cartPage from "./pages/cartPage.jsx/cartPage"
import LoginPage from "./pages/loginpage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import ShippingPage from "./pages/shippingPage/ShippingPage"
import PaymentMetodPage from "./pages/PaymentMetodPage/PaymentMetodPage"
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage"
import OrderPage from "./pages/order/OrderPage"
import UsersListPage from "./pages/usersPage/UsersListPage"
import UserOrderPage from "./pages/userOrderPage/UserOrderPage"
import UserProfileForAdmin from "./pages/adminAccessUserProfile/UserProfileForAdmin"
import ProductsListPage from "./pages/productListPage/ProductListPage"
import { useDispatch } from "react-redux"
import { checkForToken } from "./redux/user/userAction"
import CreateProduct from "./pages/CreateProduct/createProduct"
import AdminProductList from "./pages/AdminProductList/AdminProductList"
import UpdateProduct from "./pages/updateProductPage/updataProductPage"
import AdminOrdersPage from "./pages/adminOrdersPage/AdminOrdersPage"
function App({}) {
  const dispatch = useDispatch()
  console.log("ss")
  dispatch(checkForToken())

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={cartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/user/orders" component={UserOrderPage} />
          <Route path="/admin/orderlist" component={AdminOrdersPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentMetodPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/admin/userlist" component={UsersListPage} />
          <Route path="/owner/productslist" component={ProductsListPage} />
          <Route path="/admin/productslist" component={AdminProductList} />
          <Route path="/admin/updateproduct/:id" component={UpdateProduct} />
          <Route
            path="/admin/user/:userid/edit"
            component={UserProfileForAdmin}
          />
          <Route path="/create/product" component={CreateProduct} />
        </Container>
      </main>

      <Footer />
    </Router> 
  )
}

export default App

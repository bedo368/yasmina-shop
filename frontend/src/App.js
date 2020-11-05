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
function App({}) {
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
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentMetodPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={OrderPage} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App

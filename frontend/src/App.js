import React, { lazy, Suspense } from "react"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { checkForToken } from "./redux/user/userAction"
import Loader from "./components/loader/Loader"

const OrderPage = lazy(() => import("./pages/order/OrderPage"))
const UsersListPage = lazy(() => import("./pages/usersPage/UsersListPage"))
const UserOrderPage = lazy(() => import("./pages/userOrderPage/UserOrderPage"))
const UserProfileForAdmin = lazy(() =>
  import("./pages/adminAccessUserProfile/UserProfileForAdmin")
)
const ProductsListPage = lazy(() =>
  import("./pages/productListPage/ProductListPage")
)
const CreateProduct = lazy(() => import("./pages/CreateProduct/createProduct"))
const AdminProductList = lazy(() =>
  import("./pages/AdminProductList/AdminProductList")
)
const UpdateProduct = lazy(() =>
  import("./pages/updateProductPage/updataProductPage")
)
const AdminOrdersPage = lazy(() =>
  import("./pages/adminOrdersPage/AdminOrdersPage")
)
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"))
const ProfilePage = lazy(() => import("./pages/shippingPage/ShippingPage"))
const ShippingPage = lazy(() => import("./pages/shippingPage/ShippingPage"))
const PaymentMetodPage = lazy(() =>
  import("./pages/PaymentMetodPage/PaymentMetodPage")
)
const PlaceOrderPage = lazy(() =>
  import("./pages/PlaceOrderPage/PlaceOrderPage")
)
const HomePage = lazy(() => import("./pages/homePage/HomePage"))
const ProductPage = lazy(() => import("./pages/porductPage/ProductPage"))
const cartPage = lazy(() => import("./pages/cartPage.jsx/cartPage"))
const LoginPage = lazy(() => import("./pages/loginpage/LoginPage"))

function App({}) {
  const dispatch = useDispatch()
  console.log("ss")
  dispatch(checkForToken())

  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Suspense fallback={<Loader />}>
            <Route path="/" component={HomePage} exact />
            <Route path="/page/:pageNumber" component={HomePage} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomePage}
              exact
            />
            <Route path="/search/:keyword" component={HomePage} exact />
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
            <Route
              path="/owner/productslist"
              component={ProductsListPage}
              exact
            />
            <Route
              path="/owner/productslist/page/:pagenumber"
              component={ProductsListPage}
            />
            <Route
              path="/admin/productslist"
              component={AdminProductList}
              exact
            />
            <Route
              path="/admin/productslist/page/:pagenumber"
              component={AdminProductList}
              exact
            />
            <Route path="/admin/updateproduct/:id" component={UpdateProduct} />
            <Route
              path="/admin/user/:userid/edit"
              component={UserProfileForAdmin}
            />
            <Route path="/create/product" component={CreateProduct} />
          </Suspense>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App

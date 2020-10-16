import React from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Container } from "react-bootstrap"
import HomePage from "./pages/homePage/HomePage"
import {BrowserRouter as Router , Route } from "react-router-dom"
import ProductPage from "./pages/porductPage/ProductPage"
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
            <Route path="/" component={HomePage} exact /> 
            <Route path="/product/:id" component={ProductPage}  />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App

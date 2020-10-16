import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Product from "../../components/Product/product"
import axios from "axios"
const HomePage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fitch = async () => {
      const query = `
      query{
        getAllProducts {
          _id
          image
          brand
          price
          rating
          numReviews
          category
          description
          countInStock
          
          
        }
      }
      `
      const { data } = await axios({
        method: "POST",
        data: {
          query,
        },
        url: "/graphql",
      })
      setProducts(data.data.getAllProducts)
    }
    fitch()
  }, [])
  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} lg={3} md={6}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomePage

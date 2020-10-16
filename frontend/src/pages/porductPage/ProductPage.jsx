import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import Rating from "../../components/Ratiing/Rating"
import { useState, useEffect } from "react"
import Axios from "axios"
const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fitch = async () => {
      const query = `
     query{
      getProductById(id:"${match.params.id}"){
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

      const {data} = await Axios({
        method: "POST",
        url: "/graphql",
        data: {
          query,
        },
      })
      console.log(data);
      setProduct(data.data.getProductById)
    }
    fitch()
  }, [])

  return (
    <div className="productPage">
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup.Item>
            <h3>{product.name} </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews `} />
          </ListGroup.Item>
          <ListGroup.Item>price : {product.price}$</ListGroup.Item>
          <ListGroup.Item>Description : {product.description}</ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item varient="flush">
              <Row>
                <Col>price</Col>
                <Col>
                  <strong> ${product.price} </strong>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
          </Card>
          <Card>
            <ListGroup.Item varient="flush">
              <Row>
                <Col>Stauts</Col>
                <Col>{product.countInStock > 0 ? "in stock" : "outof stock"}</Col>
              </Row>
            </ListGroup.Item>
          </Card>
          <ListGroup.Item>
            <Button
              className="btn-block"
              type="button"
              disabled={product.countInStock === 0}
            >
              Add To Cart
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage

import React from "react"
import { Card } from "react-bootstrap"
import Rating from "../Ratiing/Rating"
import { Link } from "react-router-dom"

const product = ({ product, Home }) => {
  return (
    <Card
      className="my-3 p-3 rounded  mx-auto "
      style={Home && { backgroundColor:"rgb(173, 12, 100)", color: "white" , display:"flex" }}
    >
      <Link to={`/product/${product?._id}`}>
        <Card.Img
          src={product?.image}
          variant="top"
          style={{ maxHeight: "300px", minHeight: "300px" }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product?._id}`}>
          <Card.Title as="div" className="mx-auto" style={{ color: "white" , alignSelf: "flex-end" }}>
            {" "}
            {product?.name}{" "}
          </Card.Title>
        </Link>
        <Card.Text>
          <div className="my-3">
            <Rating
              value={product?.rating}
              text={`${product?.numReviews}reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product?.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default product

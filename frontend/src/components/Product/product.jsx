import React from "react"
import { Card } from "react-bootstrap"
import Rating from "../Ratiing/Rating"
import { Link } from "react-router-dom"

const product = ({ product, Home }) => {
  return (
    <Card
      className="my-4 p-4 rounded mx-auto  "
      // style={Home && { backgroundColor: "#E52165", color: "white" }}
      style={{boxShadow:"5px 5px 20px" ,textAlign: "center"}}
    >
      <Link to={`/product/${product?._id}`}>
        <Card.Img
        
          src={product?.image}
          variant="top"
          style={{ maxHeight: "300px", minHeight: "300px" ,boxShadow:"2px 2px 20px"  }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product?._id}`}>
          <Card.Title
            as="div"
            className="mx-auto"
            style={{ fontSize:"20px" , font:"bold" , fontWeight:"bolder"  }}
          >
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
        <Card.Text as="h3">{product?.price} LE</Card.Text>
      </Card.Body> 
    </Card> 
  )
}

export default product

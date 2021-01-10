import React, { useState, useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import Loader from "../../components/loader/Loader"
import { useSelector, useDispatch } from "react-redux"
import "./createProduct.scss"
import { createNewProduct } from "../../redux/product/productAction"
const CreateProduct = ({ history }) => {
  const createdProduct = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  const { createProductState, loading } = createdProduct

  useEffect(() => {
    if (createProductState && !loading) {
      history.push(`/admin/productslist`)
    }
  }, [createProductState, dispatch, loading])
  const [productInfo, changeProductInfo] = useState({
    name: "",
    price: "",
    image: "",
    brand: "",
    description: "",
    countInStock: "",
    category: "",
  })

  const [imageUpload, setimageUplad] = useState(null)
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    setimageUplad(formData)
  }
  const {
    name,
    price,
    image,
    brand,
    description,
    countInStock,
    category,
  } = productInfo
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createNewProduct({
        name,
        price,
        image,
        brand,
        description,
        countInStock,
        category,
        imageUpload,
        top
      })
    )
  }
  const productInfoOnChange = (event) => {
    const { name, value } = event.target
    changeProductInfo((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }
const [top , setTop]= useState(false)
  return (
    <div className="create-product">
      {loading && <Loader />}
      <h2>create new product</h2>
      <section className="product-info">
        <Row>
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={productInfoOnChange}
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>price</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  onChange={productInfoOnChange}
                />
                
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Check
                  type="checkbox"
                  label="Top"
                  name="top"
                  onChange={(e) => {
                    setTop(e.target.checked)
                  }}
                />
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>image</Form.Label>
                {/* <Form.Control
                                    type="text"
                                    placeholder="Enter image"
                                    name="image"
                                    value={image}
                                    onChange={productInfoOnChange}
                                /> */}
                <Form.File
                  label="chose file "
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
              </Form.Group>
              <Form.Group controlId="brand">
                <Form.Label>brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand"
                  name="brand"
                  value={brand}
                  onChange={productInfoOnChange}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="Enter description"
                  name="description"
                  value={description}
                  onChange={productInfoOnChange}
                />
                <Form.Group controlId="category">
                  <Form.Label>category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    name="category"
                    value={category}
                    onChange={productInfoOnChange}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="countInStock">
                <Form.Label>count In Stuck</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter countInStock"
                  name="countInStock"
                  value={countInStock}
                  onChange={productInfoOnChange}
                />
              </Form.Group>
              <Button type="submit"> Create</Button>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default CreateProduct

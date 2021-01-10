import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import FormContainer from "../../components/FormContainer/FormContainer"
import { saveShippingAddress } from "../../redux/cart/cartAction"
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps"
const ShippingPage = ({ history }) => {
  const dispatch = useDispatch()
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const { address, city, postalCode, country } = shippingInfo
  const shippingInfoOnChange = (e) => {
    const { value, name } = e.target
    setShippingInfo((preval) => ({ ...preval, [name]: value }))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const data = { address, city, postalCode, country }
    dispatch(saveShippingAddress(data))
    history.push("/payment")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label> address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={address}
            onChange={shippingInfoOnChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label> city</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={city}
            onChange={shippingInfoOnChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label> Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone number"
            name="postalCode"
            value={postalCode}
            onChange={shippingInfoOnChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label> country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country"
            value={country}
            onChange={shippingInfoOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage

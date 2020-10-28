import React, { useState } from "react"
import { Button, Form, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../../components/FormContainer/FormContainer"
import { savePaymentMethod } from "../../redux/cart/cartAction"
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps"
const PaymentMethodPage = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cartReducer)
  if (!shippingAddress) {
    history.push("/shipping")
  }
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState("paypal")
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Shipping </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="paypal or cridit card"
              name="paymentMethod"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />

            {/* <Form.Check
              type="radio"
              label="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentMethodPage

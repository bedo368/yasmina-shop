import Order from "../../models/orderModel.js"
import asyncHandler from "express-async-handler"
import User from "../../models/userModels.js"

const orderQuery = {
  // fetch order bi ID
  getOrderById: asyncHandler(async (args, req) => {
    const { id } = args
    if (!req.isAuth) {
      throw new Error("please log in to see your order")
    }
    const fetchedOrder = await Order.findById(id).populate(
      "orderCreator",
      " _id name email"
    )
    if (!fetchedOrder) {
      throw new Error("order does not exist")
    }
    if (String(req.userId) !== String(fetchedOrder.orderCreator._id)) {
      throw new Error("this order didn't belong to you")
    }
    return { ...fetchedOrder._doc }
  }),
  getAllLogedInUserOrders: asyncHandler(async (args, req) => {
    if (!req.isAuth) {
      throw new Error("please log in ")
    }
    try {
      const allUserOrders = await Order.find({ orderCreator: req.userId })
      return allUserOrders
    } catch (error) {
      throw new Error(error)
    }
  }),
  getAllOrdersForAdmin: asyncHandler(async (args, req) => {
    if (req.currentUser.isAdmin) {
      const allOrders = await Order.find()
      return allOrders
    } else {
      throw new Error("admin only")
    }
  }),
}

const orderMutation = {
  // CREATE NEW ORDER
  CreateOrder: asyncHandler(async (args, req) => {
    if (!req.isAuth) {
      throw new Error("please log in and try agien")
    }
    try {
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = args
      const order = new Order({
        orderItems: JSON.parse(orderItems),
        orderCreator: req.userId,
        shippingAddress: JSON.parse(shippingAddress),
        paymentMethod,
        taxPrice,
        shippingPrice,
        itemsPrice,
        totalPrice,
      })
      const orderCreator = await User.findById(req.userId)
      const createdOrder = await order.save()
      orderCreator.ordersList.push(createdOrder._id)
      await orderCreator.save()

      return createdOrder
    } catch (error) {
      throw new Error(error)
    }
  }),
  // UPDATE ORDER TO PAID
  updateOrderToPaid: asyncHandler(async (args, req) => {
    const { orderId, orderResult } = args
    if (!req.isAuth) {
      throw new Error("please log in and try agien")
    }
    const order = await Order.findById(orderId)
    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
    }
    const updatedOrder = await Order.save()
    console.log(updatedOrder)
    return updatedOrder
  }),
  removeOrder: asyncHandler(async (args, req) => {
    const { _id } = args
    const orderToDelete = await Order.findById(_id)
    if (String(orderToDelete.orderCreator) === req.currentUser._id) {
      await orderToDelete.remove()
      return orderToDelete
    } else if (req.currentUser.isAdmin) {
      await orderToDelete.remove()
      return orderToDelete
    } else {
      throw new Error("order did't update ")
    }
  }),
}

export default { ...orderMutation, ...orderQuery }

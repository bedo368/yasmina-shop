import Order from "../../models/orderModel.js"
import asyncHandler from "express-async-handler"
import User from "../../models/userModels.js"
import { json } from "express"

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
    // if (String(req.userId) !== String(fetchedOrder.orderCreator._id)) {
    //   throw new Error("this order didn't belong to you")
    // }
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
    const PageSize = 8
    var pageNumber = args.pageNumber
    if (req.currentUser.isAdmin) {
      const ordersCount = await Order.countDocuments()
      const allOrders = await Order.find().sort({$natural:-1})
        .limit(PageSize)
        .skip(PageSize * (pageNumber - 1))
      return {
        orders: allOrders,
        pageNumber,
        pages: Math.ceil(ordersCount / PageSize),
      }
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
        shippingPrice,
        totalPrice,
      } = args
      const order = new Order({
        orderItems: JSON.parse(orderItems),
        orderCreator: req.userId,
        shippingAddress: JSON.parse(shippingAddress),
        paymentMethod,
        taxPrice: 25,
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
    const { orderId } = args
    const orderResult = JSON.parse(args.orderResult)
    if (!req.isAuth) {
      throw new Error("please log in and try agien")
    }
    const order = await Order.findById(orderId)

    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentMethod = "paypal"
      order.paymentResult = {
        id: orderResult.id,
        status: orderResult.status,
        update_time: orderResult.update_time,
        email_address: orderResult.payer.email_address,
      }
    }
    const updatedOrder = await order.save()
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
  updateOrderToDeliverd: asyncHandler(async (args, req) => {
    console.log(req.currentUser)
    console.log(req.isAuth)
    if (req.isAuth) {
      if (req.currentUser.isAdmin) {
        const order = await Order.findById(args.id).populate(
          "orderCreator",
          " _id name email"
        )
        order.isDelivered = true
        order.deliveredAt = Date.now()
        order.save()

        return order
      } else {
        throw new Error("ONLY ADMIN")
      }
    } else {
      throw new Error("AUTH REQUIRE ")
    }
  }),
}

export default { ...orderMutation, ...orderQuery }

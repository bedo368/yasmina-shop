import User from "../../models/userModels.js"
import Order from "../../models/orderModel.js"
import Product from "../../models/productModel.js"
import expressAsyncHandler from "express-async-handler"

const getAllUserOrders =expressAsyncHandler(async (userId)=>{

    const foundedUser = await User.findById(userId)

    const userOrders = await foundedUser.ordersList.map(order =>{
        const fetchedOrder = await Order.findById(order)
        return {...fetchedOrder._doc}
    })

    return {...foundedUser , ordersList : userOrders }


})
import productResolovers from "./product.resolovers.js"
import userResolovers from "./user.resolovers.js"
import orderResolvers from "./order.resolovers.js"

export default   {
    ...productResolovers,
    ...userResolovers,
    ...orderResolvers

}
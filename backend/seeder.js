import users from "./data/user.js"
import products from "./data/products.js"
import User from "./qraphql_and_database/models/userModels.js"
import Product from "./qraphql_and_database/models/productModel.js"
import Order from "./qraphql_and_database/models/orderModel.js"
import connectDB from "./config/connectDB.js"

connectDB()
const importData = async () => {
  try {
    

    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    const createdusers = await User.insertMany(users)
    const adminUser = createdusers[0]._id
    const sampleProducts = products.map((product) => ({ ...product, user: adminUser }))
    await Product.insertMany(sampleProducts)
    console.log("data imported")
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

const dataDestroy = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()
    console.log("distory data")
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

if (process.argv[2] === "-d") {
  dataDestroy()
} else {
  importData()
}

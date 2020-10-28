import Product from "../../models/productModel.js"
import asyncHandler from "express-async-handler"

const productsQuery = {
  // frtch all products resolover
  getAllProducts: asyncHandler(async () => {
    try {
      const products = await Product.find({})
      return products.map((p) => ({ ...p._doc }))
    } catch (error) {
      throw new Error("No products")
    }
  }),
  // fitch product by id resolover
  getProductById: asyncHandler(async ({ id }) => {
    try {
      const product = await Product.findById(id)
      return { ...product._doc }
    } catch (error) {
      res.status(401)
      throw new Error("No product")
    }
  }),
}

export default {
  ...productsQuery,
}

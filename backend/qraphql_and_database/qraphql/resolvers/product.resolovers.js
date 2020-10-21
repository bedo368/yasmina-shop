import Product from "../../models/productModel.js"

const productsQuery = {
  // frtch all products resolover
  getAllProducts: async () => {
    try {
      const products = await Product.find({})
      return products.map((p) => ({ ...p._doc }))
    } catch (error) {
      throw new Error("No products")
    }
  },
  // fitch product by id resolover
  getProductById: async ({ id }) => {
    try {
      const product = await Product.findById(id)
      return { ...product._doc }
    } catch (error) {
      res.status(401)
      throw new Error("No product")
    }
  },
}

export default {
  ...productsQuery,
}

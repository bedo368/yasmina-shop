import Product from "../../models/productModel.js"
import asyncHandler from "express-async-handler"
import User from "../../models/userModels.js"

const productsQuery = {
  // frtch all products resolover
  getAllProducts: asyncHandler(async (args, req) => {
    const pageSize = 8
    const pageNumber = args.pageNumber || 1
    const keyword = args.keyword
      ? {
          name: {
            $regex: args.keyword,
            $options: "i",
          },
        }
      : {}
    const category = args.category ? args.category : ""

    try {
      if (category) {
        const ProductCount = await Product.countDocuments({ category })
        const products = await Product.find({ category })
          .limit(pageSize)
          .skip(pageSize * (pageNumber - 1))
        return {
          products,
          pageNumber,
          pages: Math.ceil(ProductCount / pageSize),
        }
      } else {
        const ProductCount = await Product.countDocuments({ ...keyword })
        const products = await Product.find({ ...keyword })
          .limit(pageSize)
          .skip(pageSize * (pageNumber - 1))
        return {
          products,
          pageNumber,
          pages: Math.ceil(ProductCount / pageSize),
        }
      }
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
  getAdminProducts: asyncHandler(async (args, req) => {
    const pageSize = 8
    const pageNumber = args.pageNumber || 1
    try {
      if (req.currentUser.isAdmin) {
        const ProductCount = await Product.countDocuments({
          user: req.currentUser._id,
        })
        const productsList = await Product.find({ user: req.currentUser._id })
          .limit(pageSize)
          .skip(pageSize * (pageNumber - 1))
        return {
          products: productsList,
          pageNumber,
          pages: Math.ceil(ProductCount / pageSize),
        }
      } else {
        throw new Error("you are not admin")
      }
    } catch (error) {
      throw new Error("error happen")
    }
  }),
  getTopProduct: asyncHandler(async (arg, req) => {
    const topProduct = await (
      await Product.find({ top: true }).limit(4)
    ).reverse()
    return topProduct
  }),
  getCategories: asyncHandler(async (req, res) => {
    const categories = await Product.distinct("category")
    return categories
  }),
}
const productsMutation = {
  removeProductById: asyncHandler(async (args, req) => {
    const { id } = args
    if (req.currentUser.isOwner) {
      const productToRemove = await Product.findById(id)
      productToRemove.remove()
      productToRemove.save()
      return { _id: productToRemove._id }
    }
    if (req.isAuth) {
      if (req.currentUser.isAdmin) {
        const productToRemove = await Product.findById(id)
        if (String(productToRemove.user) === String(req.currentUser._id)) {
          productToRemove.remove()
          productToRemove.save()
          return { _id: productToRemove._id }
        } else {
          throw new Error("this is not your product")
        }
      } else {
        throw new Error("you are not Admin")
      }
    } else {
      throw new Error("please login")
    }
  }),
  createProduct: asyncHandler(async (args, req) => {
    if (req.isAuth) {
      const isAdminUser = await User.findById(req.currentUser._id)
      if (isAdminUser.isAdmin) {
        const {
          name,
          description,
          image,
          category,
          brand,
          countInStock,
          price,
          top,
        } = args
        const newProduct = new Product({
          name,
          description,
          image,
          category,
          brand,
          countInStock,
          price,
          top,
          user: req.currentUser._id,
        })
        const savedNewProduct = await newProduct.save()

        return savedNewProduct
      } else {
        throw new Error("only admin can create product")
      }
    } else {
      throw new Error("please login")
    }
  }),
  updateProduct: asyncHandler(async (args, req) => {
    const {
      _id,
      name,
      description,
      image,
      category,
      brand,
      countInStock,
      price,
      top,
    } = args
    if (req.isAuth) {
      const isAdminUser = await User.findById(req.currentUser._id)
      if (isAdminUser.isAdmin) {
        const productToEdit = await Product.findById(_id)
        if (String(req.currentUser._id) === String(productToEdit.user)) {
          productToEdit.name = name || productToEdit.name
          productToEdit.description = description || productToEdit.description
          productToEdit.image = image || productToEdit.image
          productToEdit.brand = brand || productToEdit.brand
          productToEdit.category = category || productToEdit.category
          productToEdit.top = top || productToEdit.top

          productToEdit.countInStock =
            countInStock || productToEdit.countInStock
          productToEdit.price = price || productToEdit.price

          const editedProduct = await productToEdit.save()

          return editedProduct
        } else {
          throw new Error("this is not your product ")
        }
      } else {
        throw new Error("only admin can create product")
      }
    } else {
      throw new Error("please login")
    }
  }),
}

export default {
  ...productsQuery,
  ...productsMutation,
}

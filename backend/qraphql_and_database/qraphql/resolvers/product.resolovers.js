import Product from "../../models/productModel.js";
import asyncHandler from "express-async-handler";
import User from "../../models/userModels.js";

const productsQuery = {
  // frtch all products resolover
  getAllProducts: asyncHandler(async () => {
    try {
      const products = await Product.find({});
      return products.map((p) => ({ ...p._doc }));
    } catch (error) {
      throw new Error("No products");
    }
  }),
  // fitch product by id resolover
  getProductById: asyncHandler(async ({ id }) => {
    try {
      const product = await Product.findById(id);
      return { ...product._doc };
    } catch (error) {
      res.status(401);
      throw new Error("No product");
    }
  }),
};
const productsMutation = {
  removeProductById: asyncHandler(async (args, req) => {
    const { id } = args;
    if (req.isAuth) {
      if (req.currentUser.isAdmin) {
        const productToRemove = await Product.findById(id);
        if (String(productToRemove.user) === String(req.currentUser._id)) {
          productToRemove.remove();
          productToRemove.save();
          return { _id: productToRemove._id };
        } else {
          throw new Error("this is not your product");
        }
      } else {
        throw new Error("you are not Admin");
      }
    } else {
      throw new Error("please login");
    }
  }),
  createProduct: asyncHandler(async (args, req) => {
    if (req.isAuth) {
      const isAdminUser = await User.findById(req.currentUser._id);
      if (isAdminUser.isAdmin) {
        const {
          name,
          description,
          image,
          category,
          brand,
          countInStock,
          price,
        } = args;
        const newProduct = new Product({
          name,
          description,
          image,
          category,
          brand,
          countInStock,
          price,
          user: req.currentUser._id,  
        });
        const savedNewProduct = await newProduct.save();

        return savedNewProduct;
      } else {
        throw new Error("only admin can create product");
      }
    } else {
      throw new Error("please login");
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
    } = args;
    if (req.isAuth) {
      const isAdminUser = await User.findById(req.currentUser._id);
      if (isAdminUser.isAdmin) {
        const productToEdit = await Product.findById(_id);
        if (String(req.currentUser._id) === String(productToEdit.user)) {
          productToEdit.name = name || productToEdit.name;
          productToEdit.description = description || productToEdit.description;
          productToEdit.image = image || productToEdit.image;
          productToEdit.brand = brand || productToEdit.brand;
          productToEdit.category = category || productToEdit.category;
          productToEdit.countInStock =
            countInStock || productToEdit.countInStock;
          productToEdit.price = price || productToEdit.price;

          const editedProduct = await productToEdit.save();

          return editedProduct;
        } else {
          throw new Error("this is not your product ");
        }
      } else {
        throw new Error("only admin can create product");
      }
    } else {
      throw new Error("please login");
    }
  }),
};

export default {
  ...productsQuery,
  ...productsMutation,
};
 
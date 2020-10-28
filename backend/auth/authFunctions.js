import User from "../qraphql_and_database/models/userModels.js"
import asyncHandler from "express-async-handler"
import { genrateToken } from "../utiles/generateToken.js"

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email : email.toLowerCase() })
  if (user) {
    if (await user.matchPassword(password)) {
      console.log("user is auth")
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genrateToken(user._id),
      })
    } else if (!(await user.matchPassword(password))) {
      res.status(401)
      throw new Error("password is incorrect")
    }
  } else {
    throw new Error("there is no user")
  }
})

export const userRegister = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body
  const userExist = await User.findOne({  email: email.toLowerCase() })

  if (userExist) {
    res.status(401)
    throw new Error("User already exist")
  }
  try {
    const user = await User.create({
      name,
      email : email.toLowerCase(),
      password,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genrateToken(user._id),
      })
    } else {
      res.status(404)
      throw new Error("invalid user data")
    }
  } catch (error) {
    throw new Error(error)
  }
})

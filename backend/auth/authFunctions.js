import User from "../qraphql_and_database/models/userModels.js"
import asyncHandler from "express-async-handler"
import { genrateToken } from "../utiles/generateToken.js"

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email.toLowerCase() })
  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genrateToken(user._id, {
          email: user._doc.email,
          name: user._doc.name,
          isAdmin: user._doc.isAdmin,
          _id: user._doc._id,
        }),
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
  const userExist = await User.findOne({ email: email.toLowerCase() })

  if (userExist) {
    res.status(401)
    throw new Error("User already exist")
  }
  try {
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genrateToken(user._id, { ...user._doc, password: null }),
      })
    } else {
      res.status(404)
      throw new Error("invalid user data")
    }
  } catch (error) {
    throw new Error(error)
  }
})


export const checkToken = asyncHandler(async (req, res) => {

  if (req.isAuth){
    const sendNewToken = await User.findById(req.userId)
    if(sendNewToken){
      res.status(201).json({
        _id: sendNewToken._id,
        name: sendNewToken.name,
        email: sendNewToken.email,
        isAdmin: sendNewToken.isAdmin,
        token: genrateToken(sendNewToken._id, { ...sendNewToken._doc, password: null }),
  
      })
  
    }else{

      console.log("error");
      throw new Error("user is not exist" ) 
    }
    
  }

})
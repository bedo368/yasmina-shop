import User from "../qraphql_and_database/models/userModels.js"
import asyncHandler from "express-async-handler"
import {genrateToken} from "../utiles/generateToken.js"
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    if (await user.matchPassword(password)) {
      console.log("user is auth")
      res.json({
        _id: user._id,
        name: user.name,
        email : user.email,
        isAdmin : user.isAdmin,
        token : genrateToken(user._id)
      })
    } else if (!(await user.matchPassword(password))) {
        res.status(401)
        throw new Error("password is incorrect")
    }
  } else {
    throw new Error("there is no user")
    
  }
})

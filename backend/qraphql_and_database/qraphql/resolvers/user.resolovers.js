import User from "../../models/userModels.js"
import asyncHandler from "express-async-handler"
// user query
const userQuery = {
  getUserProfile: asyncHandler(async (args, req) => {
    if (!req.isAuth) {
      throw new Error("not auth")
    } else {
      try {
        const user = await User.findById(req.userId)
        return {
          _id: user._doc._id,
          name: user._doc.name,
          email: user._doc.email,
          password: null,
          isAdmin: user._doc.isAdmin,
        }
      } catch (error) {
        throw new Error("user is not exist")
      }
    }
  }),
  // get all users for admin
  getAllUsersForAdmin: asyncHandler(async (args, req) => {
    if (!req.isAuth) {
      throw new Error("please log in ")
    } else {
      try {
        const currentUser = await User.findById(req.userId)

        if (!currentUser.isAdmin) {
          throw new Error("you are not admin ")
        } else if (currentUser.isAdmin) {
          const users = await User.find({})
          return users
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }),
}

// user mutation
const userMutation = {
  updateUserProfile: asyncHandler(async ({ name, email, password, oldPassword }, req) => {
    if (!req.isAuth) {
      throw new Error("not auth")
    } else {
      const user = await User.findById(req.userId)
      const matchedpasswrd = await user.matchPassword(oldPassword)
      if (!matchedpasswrd) {
        throw new Error("old password is incorrect")
      }
      if (user) {
        user.name = name || user.name
        user.email = email || user.email
        if (password) {
          user.password = password || user.password
        }
      }
      const upadtedUser = await user.save()
      if (upadtedUser) {
        return {
          _id: upadtedUser._doc._id,
          name: upadtedUser._doc.name,
          email: upadtedUser._doc.email,
          password: null,
          isAdmin: upadtedUser._doc.isAdmin,
        }
      }

      throw new Error("user did't update please try agien ")
    }
  }),
}

const userResolovers = {
  ...userQuery,
  ...userMutation,
}
export default userResolovers

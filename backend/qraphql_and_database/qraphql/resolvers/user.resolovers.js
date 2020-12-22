import User from "../../models/userModels.js"
import asyncHandler from "express-async-handler"
import Order from "../../models/orderModel.js"
// user query
const userQuery = {
  getUserProfile: asyncHandler(async (args, req) => {
    if (!req.isAuth) {
      throw new Error("not auth")
    } else {
      try {
        const user = await User.findById(req.userId)
        return user
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
  getUserByIdForAdmin: asyncHandler(async (args, req) => {
    const { id } = args
    if (req.isAuth) {
      const isAdmin = await User.findById(req.userId)
      if (isAdmin.isAdmin) {
        const fetchedUser = await User.findById(id)
        return { ...fetchedUser._doc, token: null }
      } else {
        throw new Error("you are not admin")
      }
    } else {
      throw new Error("please log in")
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
        return upadtedUser
      }

      throw new Error("user did't update please try agien ")
    }
  }),
  // remove user for admin only
  removeUserById: asyncHandler(async ({ id }, req) => {
    if (req.isAuth) {
      const isOwner = await User.findById(req.userId)
      if (isOwner.isOwner) {
        const userToRemove = await User.findById({ _id: id })
        if (userToRemove.isOwner) {
          throw new Error("you cant't delete owner")
        } else {
          const deleteUser = await User.deleteOne({ _id: id })
          const removeUserOrders = await Order.deleteMany({
            _id: { $in: userToRemove.ordersList },
          })

          return userToRemove
        }
      } else {
        throw new Error("you are not admin")
      }
    } else {
      throw new Error("please log in ")
    }
  }),

  // update user profile for admin
  updateUserProfileForAdmin: asyncHandler(
    async ({ id, name, email, adminPassword, isAdmin }, req) => {
      if (!req.isAuth) {
        throw new Error("not auth")
      } else {
        const isUserOwner = await User.findById(req.userId)
        if (isUserOwner.isOwner) {
          const adminMatchedPassword = await isUserOwner.matchPassword(adminPassword)

          if (adminMatchedPassword) {
            const user = await User.findById(id)
            if (user) {
              user.name = name || user.name
              user.email = email || user.email
              if (user.isOwner) {
                user.isAdmin = true
              } else {
                user.isAdmin = isAdmin
              }

            }
            const upadtedUser = await user.save()
            if (upadtedUser) {
              return upadtedUser
            }
          } else {
            throw new Error("your passord is incorrect")
          }
        }

        throw new Error("user did't update please try agien ")
      }
    }
  ),
}

const userResolovers = {
  ...userQuery,
  ...userMutation,
}
export default userResolovers

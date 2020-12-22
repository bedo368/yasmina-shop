import jwt from "jsonwebtoken"
import User from "../qraphql_and_database/models/userModels.js"

export const authMiddleWare = (req, res, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    req.isAuth = false
    return next()
  }
  const token = authHeader.split(" ")[1]
  if (!token || token === "") {
    req.isAuth = false

    return next()
  }
  let decodedToken
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    req.isAuth = false
    return next()
  }
  if (!decodedToken) {
    req.isAuth = false
    return next()
  }
  if (decodedToken) {
    req.isAuth = true
    req.userId = decodedToken._id
    req.currentUser = decodedToken.user
    return next()
  }
  return next()
}

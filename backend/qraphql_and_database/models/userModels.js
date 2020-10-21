import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchame = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, uniqe: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
)

userSchame.methods.matchPassword = async function (enterdPassword) {
  const passwordCheck = await bcrypt.compare(enterdPassword, this.password)
  return passwordCheck
}

const User = mongoose.model("User", userSchame)

export default User

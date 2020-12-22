import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchame = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isOwner: { type: Boolean, required: true, default: false },
    ordersList : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }]
  },
  { timestamps: true }
)

userSchame.methods.matchPassword = async function (enterdPassword) {
  const passwordCheck = await bcrypt.compare(enterdPassword, this.password)
  return passwordCheck
}
userSchame.pre("save" , async function(next){
  if(!this.isModified("password")){
    return next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password , salt ) 
  
})

const User = mongoose.model("User", userSchame)

export default User

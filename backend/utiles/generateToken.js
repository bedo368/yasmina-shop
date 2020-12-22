import jwt from "jsonwebtoken"

export const genrateToken = (_id , user )=>{
    return jwt.sign({_id , user} , process.env.JWT_SECRET , {expiresIn :"30d"} )
}
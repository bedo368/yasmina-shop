import express from "express"
import path from "path"
import dotenv from "dotenv"
import { graphqlHTTP } from "express-graphql"
import connectDB from "./config/connectDB.js"
import schema from "./qraphql_and_database/qraphql/schema/qrpahql_schema.js"
import resolovers from "./qraphql_and_database/qraphql/resolvers/resolovers.js"
import UserRoutes from "./auth/authRoutes.js"
import { errorHandler } from "./Middleware/errorHandeler.js"
import { authMiddleWare } from "./Middleware/auth.js"
import uploadRoute from "./uplodRout/uploadRout.js"
const app = express()
 
app.use(express.json())  
app.use(authMiddleWare)

app.use(errorHandler) 
app.use("/user", UserRoutes)
app.use("/upload", uploadRoute)
dotenv.config()
const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
app.post(
    "/graphql",
    graphqlHTTP({
        graphiql: false,
        schema: schema,
        rootValue: resolovers, 
    })
)
app.get("/api/config/paypal", (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
)
 
if(process.env.NODE_ENV === "production"){ 
    app.use(express.static(path.join(__dirname , "frontend/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend" ,"build","index.html" ))
    }) 
}
 
connectDB() 
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server start"))

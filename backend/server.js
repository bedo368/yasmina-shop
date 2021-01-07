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

app.use("/", UserRoutes)
app.use("/upload", uploadRoute)
dotenv.config()
app.use(errorHandler)
const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema: schema,
        rootValue: resolovers,
    })
)
app.get("/api/config/paypal", (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
)

connectDB()
const PORT = process.env.PORT || 8000
app.listen(PORT, console.log("server start"))

import express from "express"
import dotenv from "dotenv"
import { graphqlHTTP } from "express-graphql"
import connectDB from "./config/connectDB.js"
import schema from "./qraphql_and_database/qraphql/schema/qrpahql_schema.js"
import resolovers from "./qraphql_and_database/qraphql/resolvers/resolovers.js"
import UserRoutes from "./auth/authRoutes.js"
import { errorHandler } from "./Middleware/errorHandeler.js"
import {authMiddleWare} from "./Middleware/auth.js"
const app = express()

app.use(express.json())
app.use(authMiddleWare)

app.use("/", UserRoutes)

dotenv.config()
app.use(errorHandler)

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: resolovers,
  })
)


connectDB()
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server start"))

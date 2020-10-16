const express = require("express")
const dotenv =  require("dotenv")
const { graphqlHTTP }  = require( "express-graphql") 
const app = express()
const schema  = require( "./qraphql_and_database/qraphql/schema/qrpahql_schema.js")
const resolovers = require( "./qraphql_and_database/qraphql/resolvers/resolovers.js")
dotenv.config()
app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema: schema,
      rootValue: resolovers,
    })
  );

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log("server start"))
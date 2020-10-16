const { buildSchema } = require("graphql");

module.exports =  buildSchema(`

    type product{
        _id: ID!
        name: String!
        image: String!
        description: String!
        brand: String!
        category: String!
        price: Float!
        countInStock: Int!
        rating:Float!
        numReviews: Int!
        
    } 


    type rootQuery{ 
        getAllProducts : [product]!
        getProductById(id:String): product
    }

    schema {
        query : rootQuery
    }


`)
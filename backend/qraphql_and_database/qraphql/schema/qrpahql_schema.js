import { buildSchema } from "graphql"

export default  buildSchema(`

    type Product{
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

    type User {
        _id :ID!
        name : String!
        password: String!
    }


    type rootQuery{ 
        getUserProfile : User
        getAllProducts : [Product]!
        getProductById(id:String): Product
    }

    schema {
        query : rootQuery
    }


`)
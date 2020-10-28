import { buildSchema } from "graphql"

export default buildSchema(`

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
        email : String!
        isAdmin : String!
    }


    type rootQuery{ 
        getUserProfile : User
        getAllProducts : [Product]!
        getProductById(id:String): Product
    }
    type rootMutation {
        updateUserProfile(name:String , email: String , password :String , oldPassword: String! ) : User!
    }

    schema {
        query : rootQuery
        mutation : rootMutation
    }


`)

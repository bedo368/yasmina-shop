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
    type OrderItem {
        _id :ID!
        name:String!
        qty: Float!
        image:String!
        price: Float!
        product: Product!
        
    }
    type PaymentResult {
        id: String!
        status:String!
        update_time:  String!
        email_Address: String!
    }
    type shippingAddress {
        address:String!
        city: String!
        postalCode: String!
        country:  String!
    }

    type User {
        _id :ID!
        name : String!
        password: String!
        email : String!
        isAdmin : Boolean!
        isOwner : Boolean!
        ordersList : [Order]!
    }
    type Order {
        _id : ID!
        orderItems : [OrderItem!]!
        shippingAddress : shippingAddress!
        paymentMethod : String!
        taxPrice : String!
        shippingPrice: String!
        totalPrice: String!
        orderCreator: User
        createdAt : String
        updatedAt: String 
        itemsPrice:String!
        paymentResult: PaymentResult!
        isPaid : Boolean!
        isDelivered : Boolean!
        paidAt : String
        deliveredAt: String

    }


    type rootQuery{ 
        getUserProfile : User
        getAllProducts : [Product]!
        getProductById(id:String): Product
        getOrderById(id:String): Order!
        getAllLogedInUserOrders : [Order]!
        getAllUsersForAdmin : [User]!
        getUserByIdForAdmin (id:String!): User!
        updateUserProfileForAdmin(id:String!, name:String, email:String, adminPassword:String!, isAdmin : Boolean!): User!
    }
    type rootMutation {
        updateUserProfile(name:String , email: String , password :String , oldPassword: String! ) : User!
        CreateOrder(orderItems : String!
            shippingAddress : String!
            paymentMethod : String! 
            taxPrice : Float!
            shippingPrice: Float!
            totalPrice: Float!
            itemsPrice : Float! ) : Order!

        updateOrderToPaid(orderId:String! ,orderResult:String!) : Order!
        removeUserById(id:String!) : User!
        removeProductById(id:String!): Product

        createProduct(name :String!, 
            description:String!,
            image:String!,
            category:String!, 
            brand:String!,
            countInStock:Float!,
               price:Float!) : Product!

            updateProduct(_id : String!,
            name :String, 
            description:String,
            image:String,
            category:String, 
            brand:String, 
            countInStock:Float,
            price:Float) : Product!
       
    }

    schema {
        query : rootQuery
        mutation : rootMutation
    }


`)

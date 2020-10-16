

const products = require( '../../../data/products.js')

const productsQuery = {
    getAllProducts : async()=>{
        return products.map(p => ({...p}))
    },
    getProductById : async ({id})=>{
        const product = await products.find(p => p._id === id)
        return  product
    }
}

module.exports =  {
    ...productsQuery
}
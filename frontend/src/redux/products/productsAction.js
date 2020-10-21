import Axios from "axios"
import productsTypes from "./productsTypes"
const fitchProductStart = () => {
  return {
    type: productsTypes.FETCH_PRODUCTS_START,
  }
}
const fitchProductSuccess = (products) => {
  return {
    type: productsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}
const fitchProductfail = (error) => {
  return {
    type: productsTypes.FETCH_PRODUCTS_FAIL,
    payload: error,
  }
}

export const fetchProductsAscync = () => {
  return (dispatch) => {
    dispatch(fitchProductStart())
    const query = `
     query{
       getAllProducts {
         _id
         name
         image
         brand
         price
         rating
         numReviews
         category
         description
         countInStock
         
         
       }
     }
     `
    Axios({
      method: "POST",
      data: {
        query,
      },
      url: "/graphql",
    })
      .then((res) => {
        dispatch(fitchProductSuccess(res.data.data.getAllProducts))
      })
      .catch(error => {
        console.log(error.response );
        const errorMessage = error.response.data.errors ?  error.response.data.errors[0].message : error.response.data
        dispatch(fitchProductfail(errorMessage ))
      })
  }
}

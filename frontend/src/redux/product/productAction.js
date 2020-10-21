import Axios from "axios"
import productTypes from "./productTypes"
const fitchProductStart = () => {
  return {
    type: productTypes.FETCH_PRODUCT_START,
  }
}
const fitchProductSuccess = (product) => {
  return {
    type: productTypes.FETCH_PRODUCT_SUCCESS,
    payload: product,
  }
}
const fitchProductfail = (error) => {
  return {
    type: productTypes.FETCH_PRODUCT_FAIL,
    payload: error,
  }
}

export const fetchProductAscync = (id) => {
    console.log("gggg");
  return (dispatch) => {
    dispatch(fitchProductStart())
    const query = `
     query getProductById($id: String!) {
        getProductById(id : $id) {
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
        variables : {id }
      },
      url: "/graphql",
    })
      .then((res) => {
        dispatch(fitchProductSuccess(res.data.data.getProductById))
      })
      .catch((error) => {
        const errorMessage = error.response.data.errors ?  error.response.data.errors[0].message : error.response.data

        dispatch(fitchProductfail(errorMessage))
      })
  }
}

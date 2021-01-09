import Axios from "axios"
import topProductTypes from "./topProductTypesTtypes"

export const fetchTopProducts = () => {
  return (dispatch) => {
    dispatch({type:topProductTypes.FETCH_TOP_PRODUCTS_START})
    const query = `
     query{
      getTopProduct {
       
         
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
        dispatch({
          type: topProductTypes.FETCH_TOP_PRODUCTS_SUCCESS,
          payload: res.data.data.getTopProduct,
        })
      })
      .catch((error) => {
        const errorMessage = error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data
        dispatch({
          payload: errorMessage,
          type: topProductTypes.FETCH_TOP_PRODUCTS_FAIL,
        })
      })
  }
}

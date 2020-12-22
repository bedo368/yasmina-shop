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
      .catch((error) => {
        console.log(error.response)
        const errorMessage = error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data
        dispatch(fitchProductfail(errorMessage))
      })
  }
}

export const removeProductById = ({ id }) => async (dispatch, getState) => {
  try {
    const query = `
     mutation($id:String!){
      removeProductById(id:$id) {
         _id
         
       }
     }
     `
    const token = getState().userReducer.userInfo.token

    const removedProduct = await Axios.post(
      "/graphql",
      {
        query,
        variables: { id },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: productsTypes.REMOVE_PRODUCT_SUCCESS,
      payload: removedProduct.data.data.removeProductById,
    })
  } catch (error) {
    const errorMessage = error?.response?.data.errors
      ? error?.response?.data?.errors[0].message
      : "this is not your product"
    dispatch({
      type: productsTypes.REMOVE_PRODUCT_FAIL,
      payload: errorMessage,
    })
  }
}


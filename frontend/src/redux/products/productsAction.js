import Axios from "axios"
import productTypes from "../product/productTypes"
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

export const fetchProductsAscync = (keyword = "", pageNumber = 1) => {
  return (dispatch) => {
    dispatch(fitchProductStart())
    const query = `
     query{
       getAllProducts(keyword:"${keyword}" , pageNumber:${pageNumber}) {
       
         products{
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
         pages
         pageNumber
         
         
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

export const fetchAdminProducts = ( pagenumber = 1) => {
  return (dispatch, getState) => {
    const token = getState().userReducer.userInfo.token
    dispatch(fitchProductStart())
    const number = Number(pagenumber)
    const query = `
     query{
      getAdminProducts( pageNumber:${number}) {
        products{
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
         pages
         pageNumber
         
       }
     }
     `
    Axios({
      method: "POST",
      url: "/graphql",
      data: {
        query,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res)
        
        dispatch({
          type: "FETCH_MYADMIN_PRODUCTS",
          payload : res.data.data.getAdminProducts,
        })
        
      })
      .catch((error) => {
        const errorMessage = ""

        dispatch(fitchProductfail(errorMessage))
      })
  }
}

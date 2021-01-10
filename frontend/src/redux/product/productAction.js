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
         top
         
         
       }
     }
     `
    Axios({
      method: "POST",
      data: {
        query,
        variables: { id },
      },
      url: "/graphql",
    })
      .then((res) => {
        dispatch(fitchProductSuccess(res.data.data.getProductById))
      })
      .catch((error) => {
        const errorMessage = error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data

        dispatch(fitchProductfail(errorMessage))
      })
  }
}

export const createNewProduct = ({
  name,
  image,
  brand,
  price,
  category,
  description,
  countInStock,
  imageUpload,
  top,
}) => async (dispatch, getState) => {
  const token = getState().userReducer.userInfo.token
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }

  dispatch({ type: productTypes.CLEAR_PRODUCT })

  dispatch({ type: productTypes.FETCH_PRODUCT_START })

  const query = `
  mutation createProduct($name :String!, $description:String!,$image:String!,$category:String!, $brand:String!,$countInStock:Float!,   $price:Float! , $top:Boolean) {
    createProduct( name :$name,  description:$description, image:$image ,category:$category,  brand:$brand, countInStock:$countInStock,    price:$price , top :$top) {
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
  Axios.post("/upload", imageUpload, config).then((data) => {
    Axios({
      method: "POST",
      data: {
        query,
        variables: {
          name,
          image: data.data,
          brand,
          price: Number(price),
          category,
          description,
          countInStock: Number(countInStock),
          top,
        },
      },
      url: "/graphql",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: productTypes.CREATE_NEW_PRODUCT,
          payload: res.data.data.createProduct,
        })
      })
      .then(() => {
        dispatch({ type: productTypes.CLEAR_PRODUCT })
      })
      .catch((error) => {
        const errorMessage = error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data

        dispatch(fitchProductfail(errorMessage))
      })
  })
}

export const updateProduct = ({
  _id,
  name,
  image,
  brand,
  price,
  category,
  description,
  countInStock,
  imageUpload,
  top,
}) => async (dispatch, getState) => {
  const token = getState().userReducer.userInfo.token
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
  top = (top ==1) ? true : false

  dispatch({ type: productTypes.CLEAR_PRODUCT })

  dispatch({ type: productTypes.FETCH_PRODUCT_START })

  const query = `
  mutation updateProduct($name :String, $description:String,$image:String,$category:String, $brand:String,$countInStock:Float,   $price:Float , $_id:String! $top:Boolean) {
    updateProduct( _id:$_id ,name :$name,  description:$description, image:$image ,category:$category,  brand:$brand, countInStock:$countInStock,    price:$price top:$top) {
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
      variables: {
        _id,
        name,
        brand,
        price: Number(price),
        category,
        description,
        countInStock: Number(countInStock),
        image,
        top,
      },
    },
    url: "/graphql",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch({
        type: productTypes.CLEAR_PRODUCT,
      })
      dispatch({
        type: productTypes.UPDATE_PRODUCT,
        action: res.data.data.updateProduct,
      })
    })
    .catch((error) => {
      const errorMessage = error.response.data.errors
        ? error.response.data.errors[0].message
        : error.response.data

      dispatch(fitchProductfail(errorMessage))
    })
}

import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTopProducts } from '../../redux/products/topProducts/topProductsAction'
import Loader from '../loader/Loader'

const ProductCurcusal = () => {
  const dispatch = useDispatch()
  const topProductSelector = useSelector(state=> state.topProductReducer)
  const {products , loading , errMassege} = topProductSelector
  useEffect(()=>{
    dispatch(fetchTopProducts())
  }, [dispatch])
  return loading ? <Loader /> : errMassege ? "" : (
    <Carousel pause="hover" className="bg-dark">
      {products?.map(product=>(
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
          <Image src={product.image} fluid />
          <Carousel.Caption className="casousel-caption">
            <h2>{product.name} </h2>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCurcusal

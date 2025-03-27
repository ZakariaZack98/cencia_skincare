import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProductData } from '../../lib/fetch';

const ProductPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const productData = getProductData();
  const matchedProduct = productData.find(item => item.pageLink === path)
  return (
    <>
      
    </>
  )
}

export default ProductPage

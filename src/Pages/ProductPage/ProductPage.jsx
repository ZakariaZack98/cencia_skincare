import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProductData } from '../../lib/fetch';
import InstructionSlide from '../../assets/Components/CommonComponents/InstructionSlide';
import Ingredients from '../../assets/Components/ProductPageComponents/Ingredients';

const ProductPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const productData = getProductData();
  const matchedProduct = productData.find(item => item.pageLink == path)
  const slideData = matchedProduct.sliderData;
  const productPageData = matchedProduct.productPageData;
  const productIngredientData = productPageData.getProductIngredients();
  console.log(productIngredientData);
  return (
    <>
      <InstructionSlide imgUrl={slideData.imgUrl} title={slideData.title} textContent={slideData.textContent} onProductPage={true} retailPrice={matchedProduct.retailPrice} preferredPrice={matchedProduct.preferredPrice}/>
      <Ingredients data={productIngredientData}/>
    </>
  )
}

export default ProductPage

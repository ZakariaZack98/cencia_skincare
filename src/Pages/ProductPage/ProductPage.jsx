import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProductData } from '../../lib/fetch';
import InstructionSlide from '../../assets/Components/CommonComponents/InstructionSlide';
import Ingredients from '../../assets/Components/ProductPageComponents/Ingredients';
import InfoBanner from '../../assets/Components/ProductPageComponents/InfoBanner';
import ProductSlider from '../../assets/Components/HomeComponents/ProductSlider';

const ProductPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const productData = getProductData();
  const matchedProduct = productData.find(item => item.pageLink == path)
  const slideData = matchedProduct.sliderData;
  const productPageData = matchedProduct.productPageData;
  const productIngredientData = productPageData.getProductIngredients();
  
  return (
    <>
      <InstructionSlide imgUrl={slideData.imgUrl} title={slideData.title} textContent={slideData.textContent} onProductPage={true} retailPrice={matchedProduct.retailPrice} preferredPrice={matchedProduct.preferredPrice}/>
      <Ingredients data={productIngredientData}/>
      <InfoBanner data={productPageData.mainBenifits}/>
      <InfoBanner data={productPageData.howToUse} howTo={true}/>
      <ProductSlider data={productData}/>
    </>
  )
}

export default ProductPage

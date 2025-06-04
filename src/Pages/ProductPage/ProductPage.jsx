import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductData } from "../../lib/fetch";
import InstructionSlide from "../../Components/CommonComponents/InstructionSlide";
import Ingredients from "../../Components/ProductPageComponents/Ingredients";
import InfoBanner from "../../Components/ProductPageComponents/InfoBanner";
import ProductSlider from "../../Components/HomeComponents/ProductSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const productData = getProductData();
  const matchedProduct = productData.find((item) => item.pageLink === path);
  const slideData = matchedProduct.sliderData;
  const productPageData = matchedProduct.productPageData;
  const productIngredientData = productPageData.getProductIngredients();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    AOS.init({
      duration: 300,
      once: false,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [path]);

  return (
    <div className="bg-lightPink dark:bg-gray-800 min-h-screen ">
      <div className="w-full">
        <InstructionSlide
          pid={matchedProduct.pid}
          imgUrl={slideData.imgUrl}
          title={slideData.title}
          textContent={slideData.textContent}
          onProductPage={true}
          retailPrice={matchedProduct.retailPrice}
          preferredPrice={matchedProduct.preferredPrice}
        />
        <Ingredients data={productIngredientData} />
        <InfoBanner data={productPageData.mainBenifits} />
        <InfoBanner data={productPageData.howToUse} howTo={true} />
        <div className="2xl:w-3/4 w-9/10 mx-auto"><ProductSlider data={productData} /></div>
      </div>
    </div>
  );
};

export default ProductPage;

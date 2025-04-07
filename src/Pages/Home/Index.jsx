import React, { useEffect } from "react";
import VideoBackground from "../../Components/VideoBG";
import { getFeatureData, getProductData, getShowCaseData, getSingleFeatureData } from "../../lib/fetch";
import SingleFeature from "../../Components/CommonComponents/SingleFeature";
import InstructionSlider from "../../Components/HomeComponents/InstructionSlider";
import FeatureSection from "../../Components/HomeComponents/FeatureSection";
import BodyMists from "../../Components/HomeComponents/BodyMists";
import ProductSlider from "../../Components/HomeComponents/ProductSlider";
import NewsLetter from "../..//Components/HomeComponents/NewsLetter";
import Footer from "../../Components/HomeComponents/Footer";


const Home = () => {
  const featureData = getFeatureData();
  const singleFeatureData = getSingleFeatureData();
  const showCaseData = getShowCaseData();
  const productData = getProductData();
  const instructionSliderData = productData.map(item => item.sliderData);
  //** adding pageLink to each slider data object so the rendered slides can connect to productpage
  const updatedInstructionSliderData = instructionSliderData.map((data, idx) => ({...data, pageLink: productData[idx].pageLink}))
  
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }, []);
  
  return (
    <>
      <VideoBackground />
      <FeatureSection data={featureData}/>
      <SingleFeature data={singleFeatureData[0]}/>
      {/* ============================Steps Slider Part================================ */}
      <section className="bg-white dark:bg-gray-700 pb-1">
        <InstructionSlider data={updatedInstructionSliderData}/>
      </section>
      {/* ============================Steps slider Part================================ */}
      <BodyMists data={showCaseData}/>
      <ProductSlider data={productData}/>
      <SingleFeature data={singleFeatureData[1]} reverse="true"/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
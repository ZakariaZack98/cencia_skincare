import React from "react";
import VideoBackground from "../../assets/Components/VideoBG";
import { getFeatureData, getProductData, getShowCaseData, getSingleFeatureData } from "../../lib/fetch";
import SingleFeature from "../../assets/Components/CommonComponents/SingleFeature";
import InstructionSlider from "../../assets/Components/HomeComponents/InstructionSlider";
import FeatureSection from "../../assets/Components/HomeComponents/FeatureSection";
import BodyMists from "../../assets/Components/HomeComponents/BodyMists";
import ProductSlider from "../../assets/Components/HomeComponents/ProductSlider";
import NewsLetter from "../../assets/Components/HomeComponents/NewsLetter";
import Footer from "../../assets/Components/HomeComponents/Footer";


const Home = () => {
  const featureData = getFeatureData();
  const singleFeatureData = getSingleFeatureData();
  const showCaseData = getShowCaseData();
  const productData = getProductData();
  const instructionSliderData = productData.map(item => item.sliderData);
  return (
    <>
      <VideoBackground />
      <FeatureSection data={featureData}/>
      <SingleFeature data={singleFeatureData[0]}/>
      {/* ============================Steps Slider Part================================ */}
      <section className="bg-white dark:bg-gray-700 pb-1">
        <InstructionSlider data={instructionSliderData}/>
      </section>
      {/* ============================Steps slider Part================================ */}
      <BodyMists data={showCaseData}/>
      <ProductSlider data={productData}/>
      <SingleFeature data={singleFeatureData[1]}/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
{/* border-solid border-2 border-red-500 */}
import React from "react";
import VideoBackground from "../../assets/Components/VideoBG";
import { getFeatureData, getInstructionSliderData, getProductData, getShowCaseData, getSingleFeatureData } from "../../lib/fetch";
import SingleFeature from "../../assets/Components/CommonComponents/SingleFeature";
import InstructionSlider from "../../assets/Components/HomeComponents/InstructionSlider";
import FeatureSection from "../../assets/Components/HomeComponents/FeatureSection";
import BodyMists from "../../assets/Components/HomeComponents/BodyMists";
import ProductSlider from "../../assets/Components/HomeComponents/ProductSlider";
import NewsLetter from "../../assets/Components/HomeComponents/NewsLetter";


const Home = () => {
  const featureData = getFeatureData();
  const singleFeatureData = getSingleFeatureData();
  const showCaseData = getShowCaseData();
  const instructionSliderData = getInstructionSliderData();
  const productData = getProductData();
  return (
    <>
      <VideoBackground />
      <FeatureSection data={featureData}/>
      <SingleFeature data={singleFeatureData[0]}/>
      {/* ============================Steps Slider Part================================ */}
      <section className="bg-white dark:bg-gray-700 pb-1">
        <InstructionSlider data={instructionSliderData}/>
      </section>
      <div className="bg-white dark:bg-gray-700 h-[50px] "></div>
      {/* ============================Steps slider Part================================ */}
      <BodyMists data={showCaseData}/>
      <ProductSlider data={productData}/>
      <SingleFeature data={singleFeatureData[1]}/>
      <NewsLetter/>
    </>
  );
};

export default Home;
{/* border-solid border-2 border-red-500 */}
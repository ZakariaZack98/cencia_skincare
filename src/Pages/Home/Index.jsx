import React from "react";
import VideoBackground from "../../assets/Components/VideoBG";
import { getFeatureData, getInstructionSliderData, getShowCaseData } from "../../lib/fetch";
import SingleFeature from "../../assets/Components/CommonComponents/SingleFeature";
import InstructionSlider from "../../assets/Components/HomeComponents/InstructionSlider";
import FeatureSection from "../../assets/Components/HomeComponents/FeatureSection";
import BodyMists from "../../assets/Components/HomeComponents/BodyMists";


const Home = () => {
  const featureData = getFeatureData();
  const showCaseData = getShowCaseData();
  const instructionSliderData = getInstructionSliderData();
  return (
    <>
      <VideoBackground />
      <FeatureSection data={featureData}/>
      <SingleFeature />
      {/* ============================Steps Slider Part================================ */}
      <section className="bg-white pb-1">
        <InstructionSlider data={instructionSliderData}/>
      </section>
      <div className="bg-white h-[50px] "></div>
      {/* ============================Steps slider Part================================ */}
      <BodyMists data={showCaseData}/>
    </>
  );
};

export default Home;
{/* border-solid border-2 border-red-500 */}
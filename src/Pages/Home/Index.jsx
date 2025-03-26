import React from "react";
import VideoBackground from "../../assets/Components/VideoBG";
import { getFeatureData, getInstructionSliderData, getShowCaseData } from "../../lib/fetch";
import SingleFeature from "../../assets/Components/CommonComponents/SingleFeature";
import RotatingShowcase from "../../assets/Components/CommonComponents/RotatingShowcase";
import InstructionSlider from "../../assets/Components/HomeComponents/InstructionSlider";


const Home = () => {
  const featureData = getFeatureData();
  const showCaseData = getShowCaseData();
  const instructionSliderData = getInstructionSliderData();
  return (
    <>
      <VideoBackground />
      {/* ================================= */}
      <div className="bg-lightPink text-accentBrwn dark:bg-gray-800 dark:text-accentBrwn mt-[150dvh] py-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-baseline gap-x-10">
            {featureData?.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  className="featureCard font-bodoni w-[20%] h-[12%] flex flex-col gap-y-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                  data-aos-delay={`${(idx + 1) * 400}`}>
                  <h3 className="text-xl font-agraham relative z-10">
                    {item.title}
                    <span className="absolute h-15 w-15 bg-pink-300 rounded-full -translate-y-7 -translate-x-12 -z-10 opacity-50"></span>
                  </h3>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SingleFeature />
      {/* border-solid border-2 border-red-500 */}
      {/* ================================= */}
      {/* ============================Steps Slider Part================================ */}
      <section className="bg-white pb-1">
        <InstructionSlider data={instructionSliderData}/>
      </section>
      <div className="bg-white h-[50px] "></div>
      {/* ============================Steps slider Part================================ */}
      {/* ============================Rotate Showcase Part================================ */}
      <div className="bg-lightPink dark:bg-gray-800 py-25 relative">
        <h1 className="absolute text-[180px] font-dmSans font-black text-white dark:text-gray-500 right-0 top-11 tracking-wider" data-aos="zoom-in" data-aos-duration="800">BODY MISTS</h1>
        <div className="container mx-auto">
          <div className="flex h-full justify-center items-center gap-x-10">
            {
              showCaseData?.map((item, idx) => {
                return (
                  <div key={item.id} className={`${!idx % 2 === 0 ? 'mt-70': ''}`}>
                    <RotatingShowcase imgUrl={item.imgUrl} textContent={item.textContent}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* ============================Rotate Showcase Part================================ */}
      
    </>
  );
};

export default Home;

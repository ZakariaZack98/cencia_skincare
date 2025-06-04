import React from "react";
import { useNavigate } from "react-router-dom";

const RotatingShowcase = ({imgUrl, textContent, pageLink}) => {
  const navigate = useNavigate();
  return (
    <div className="rotate flex lg:w-[40dvw] w-full  bg-white dark:bg-gray-700 justify-center items-end gap-x-10 hover:shadow-2xl duration-800 cursor-pointer" onClick={() => navigate(pageLink)}>
      <picture className="relative z-50">
        <img src={imgUrl} alt="" className=" pr lg:h-[500px] sm:h-[400px] object-cover duration-1000 z-0 lg:-translate-x-0 -translate-x-5" />
      </picture>
      <h1 className="lg:text-[50px] text-[32px] text-accentBrwn font-dmSans font-black w-[30%] lg:-translate-x-35 -translate-x-25 mb-20 z-10 md:leading-10 leading-7 translate-y-6 md:translate-y-0" data-aos="fade-right" data-aos-duration="800">
        {textContent}
      </h1>
    </div>
  );
};

export default RotatingShowcase;

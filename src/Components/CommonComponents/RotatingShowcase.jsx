import React from "react";

const RotatingShowcase = ({imgUrl, textContent}) => {
  return (
    <div className="rotate flex w-[40dvw] bg-white dark:bg-gray-700 justify-center items-end gap-x-10 hover:shadow-2xl duration-800 cursor-pointer">
      <picture>
        <img src={imgUrl} alt="" className=" pr h-[500px] object-cover duration-1000 z-0" />
      </picture>
      <h1 className="text-[50px] text-accentBrwn font-dmSans font-black w-[30%] -translate-x-35 mb-20 z-10 leading-10" data-aos="fade-right" data-aos-duration="800">
        {textContent}
      </h1>
    </div>
  );
};

export default RotatingShowcase;

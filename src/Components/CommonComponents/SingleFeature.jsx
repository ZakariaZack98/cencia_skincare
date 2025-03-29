import React from "react";
import Button from "./Button";

const SingleFeature = ({ data, reverse }) => {
  return (
    <div className=" bg-gray-800 py-50 text-accentBrwn font-dmSans">
      <div className="container mx-auto">
        <div className={`flex w-[80%] mx-auto gap-x-25 ${reverse ? 'flex-row-reverse' : ''}`}>
          <picture className="w-[70%] h-100 overflow-hidden object-center" data-aos="flip-right" data-aos-duration="1000">
            <img
              src={data.imgUrl}
              className="w-full object-cover object-center -translate-y-15"
            />
          </picture>
          <div className={`rightSec w-[30%] h-100 flex flex-col justify-between ${reverse ? 'text-end' : ''}`}>
            <h1 className="font-black text-6xl" data-aos="fade-left" data-aos-duration="1000">{data.title}</h1>
            <div className="bottomPart" data-aos="fade-up" data-aos-duration="1000">
              <p className="mb-3">
                {data.content}
              </p>
              <Button label={'EXPLORE'} clickHandler={data.clickHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;

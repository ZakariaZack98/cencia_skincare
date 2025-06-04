import React from "react";
import Button from "./Button";

const SingleFeature = ({ data, reverse }) => {
  return (
    <div className="bg-gray-800 lg:py-50 sm:py-30 py-15 text-accentBrwn font-dmSans">
      <div className="container mx-auto">
        <div className={`flex lg:w-8/10 w-9/10 flex-col-reverse ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } sm:w-9/10 mx-auto lg:gap-25 sm:gap-15 gap-8`}>
          <picture 
            className="lg:w-[70%] w-full sm:h-100 h-fit overflow-hidden object-center" 
            data-aos="flip-right" 
            data-aos-duration="1000"
          >
            <img
              src={data.imgUrl}
              className="w-full object-cover object-center sm:-translate-y-15 -translate-y-0"
            />
          </picture>
          <div 
            className={`rightSec lg:w-[30%] w-full lg:h-100 h-fit flex flex-col gap-y-3 lg:gap-y-0 justify-between ${
              reverse ? 'lg:text-end' : ''
            }`}
          >
            <h1 
              className="font-black sm:text-6xl text-5xl" 
              data-aos="fade-left" 
              data-aos-duration="1000"
            >
              {data.title}
            </h1>
            <div 
              className="bottomPart" 
              data-aos="fade-up" 
              data-aos-duration="1000"
            >
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

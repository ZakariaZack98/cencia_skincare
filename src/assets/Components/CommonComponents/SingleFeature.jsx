import React from "react";
import Button from "./Button";

const SingleFeature = ({ imgUrl, title, content }) => {
  return (
    <div className=" bg-gray-800 py-50 text-accentBrwn font-dmSans">
      <div className="container mx-auto">
        <div className="flex w-[80%] mx-auto gap-x-25">
          <picture className="w-[70%] h-100 overflow-hidden object-center" data-aos="flip-right" data-aos-duration="2000">
            <img
              src="https://uploads.livepure.com/page/15/1651a07ae69586f9151cdf3e5c940fb1.png"
              alt="https://uploads.livepure.com/page/15/1651a07ae69586f9151cdf3e5c940fb1.png"
              className="w-full object-cover object-center -translate-y-15"
            />
          </picture>
          <div className="rightSec w-[30%] h-100 flex flex-col justify-between">
            <h1 className="font-black text-6xl" data-aos="fade-left" data-aos-duration="2000">Formulated by K-Beauty Experts.</h1>
            <div className="bottomPart" data-aos="fade-up" data-aos-duration="2000">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sint nihil harum vero dicta ut sit
                voluptatum vel enim cum.
              </p>
              <Button label={'EXPLORE'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;

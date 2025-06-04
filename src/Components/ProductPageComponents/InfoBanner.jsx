import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const InfoBanner = ({data, howTo}) => {
  let i = 0
  return (
    <div className={`${howTo ? 'bg-lightPink dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} py-10 md:py-20 font-dmSans`}>
      <div className="md:container w-9/10 mx-auto">
        <div className={`flex flex-col-reverse md:flex-row items-stretch gap-y-8 gap-x-0 md:gap-x-10 ${howTo ? 'md:flex-row-reverse lg:-translate-x-7 translate-0' : 'lg:translate-x-7 translate-0'}`}>
          <div
            className={`${howTo ? 'darkGrad' : 'brwnGrad'} w-full md:w-[70%] rounded-4xl flex justify-center items-center`} data-aos="zoom-in" data-aos-duration="700">
              {
                howTo ? (
                  <div className="textSec w-[90%] md:w-[80%] text-lightPink py-5">
                    <h3 className="text-2xl md:text-4xl font-black mb-2 lg:mb-10">How to Use:</h3>
                    {
                      data?.contents?.map((item, idx) => {
                        return (
                          <div key={i++} className="flex flex-col gap-y-2 my-2 md:my-4"> 
                            <h3 className="text-lg md:text-2xl font-black">Step {idx + 1}</h3>
                            <p className="text-base md:text-lg">{item}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                ) : (<div className="textSec w-[90%] md:w-[80%]  py-5">
                  <h3 className="text-2xl md:text-4xl font-black mb-2 lg:mb-10">Main Benefits:</h3>
                  {
                    data?.contents?.map(item => {
                      return(
                        <div key={i++} className="flex gap-x-2 md:gap-x-3 my-2 md:my-3">
                          <span className="text-lg md:text-2xl"><FaCheckCircle/></span>
                          <p className="text-base md:text-lg">{item}</p>
                        </div>
                      )
                    })
                  }
                </div>)
              }
            </div>
          <picture className="w-full md:w-[30%] rounded-4xl overflow-hidden flex items-center justify-center mb-6 md:mb-0" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500">
            <img src={data.imgUrl} className="w-full h-auto max-h-[250px] md:max-h-[350px] object-contain"/>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

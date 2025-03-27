import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const InfoBanner = ({data, howTo}) => {
  return (
    <div className={`${howTo ? 'bg-lightPink dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} py-25 font-dmSans`}>
      <div className="container mx-auto">
        <div className={`flex items-stretch gap-x-10 ${howTo ? 'flex-row-reverse' : ''}`}>
          <div
            className={`${howTo ? 'darkGrad' : 'brwnGrad'} w-[70%] rounded-4xl flex justify-center items-center`}>
              {
                howTo ? (
                  <div className="textSec w-[80%] text-lightPink">
                    <h3 className="text-4xl font-black mb-10">How to Use:</h3>
                    {
                      data?.contents?.map((item, idx) => {
                        return (
                          <div className="flex flex-col gap-y-2 my-4">
                            <h3 className="text-2xl font-black">Step {idx + 1}</h3>
                            <p className="text-lg">{item}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                ) : (<div className="textSec w-[80%] ">
                  <h3 className="text-4xl font-black mb-10">Main Benefits:</h3>
                  {
                    data?.contents?.map(item => {
                      return(
                        <div className="flex gap-x-3 my-3">
                          <span className="text-2xl"><FaCheckCircle/></span>
                          <p className="text-lg">{item}</p>
                        </div>
                      )
                    })
                  }
                </div>)
              }
            </div>
          <picture className="w-[30%] rounded-4xl overflow-hidden">
            <img src={data.imgUrl}/>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

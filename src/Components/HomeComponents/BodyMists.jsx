import React from 'react'
import RotatingShowcase from '../CommonComponents/RotatingShowcase'

const BodyMists = ({data}) => {
  return (
    <div className="bg-lightPink dark:bg-gray-800 lg:py-25 py-15 relative">
        <h1 className="absolute lg:text-[180px] sm:text-[120px] text-[80px] md:text-start text-end lg:leading-48 leading-17 font-dmSans font-black text-white dark:text-gray-700 right-0 md:top-11 top-4 tracking-wider" data-aos="zoom-in" data-aos-duration="800">BODY MISTS</h1>
        <div className="w-19/20 mx-auto mt-20 md:mt-0">
          <div className="flex md:flex-row flex-col h-full lg:justify-center justify-between items-center lg:gap-x-10 gap-x-3 ">
            {
              data?.map((item, idx) => {
                return (
                  <div key={item.id} className={`${!idx % 2 === 0 ? 'md:mt-70 mt-5': ''}`}>
                    <RotatingShowcase imgUrl={item.imgUrl} textContent={item.textContent} pageLink={item.pageLink}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
  )
}

export default BodyMists

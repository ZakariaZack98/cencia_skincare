import React from 'react'
import RotatingShowcase from '../CommonComponents/RotatingShowcase'

const BodyMists = ({data}) => {
  return (
    <div className="bg-lightPink dark:bg-gray-800 py-25 relative">
        <h1 className="absolute text-[180px] font-dmSans font-black text-white dark:text-gray-700 right-0 top-11 tracking-wider" data-aos="zoom-in" data-aos-duration="800">BODY MISTS</h1>
        <div className="container mx-auto">
          <div className="flex h-full justify-center items-center gap-x-10">
            {
              data?.map((item, idx) => {
                return (
                  <div key={item.id} className={`${!idx % 2 === 0 ? 'mt-70': ''}`}>
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

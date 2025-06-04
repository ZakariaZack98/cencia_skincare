import React from 'react'

const FeatureSection = ({data}) => {
  return (
    <div className="bg-lightPink text-accentBrwn dark:bg-gray-800 dark:text-accentBrwn lg:mt-[150dvh] mt-[40dvh] lg:py-50 sm:py-25 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-y-15 place-items-start">
            {data?.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  className="featureCard font-bodoni w-full flex text-center flex-col gap-y-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                  data-aos-delay={`${(idx + 1) * 400}`}>
                  <h3 className="md:text-xl sm:text-lg text-base font-agraham relative z-10">
                    {item.title}
                    <span className="absolute h-15 w-15 bg-pink-300 rounded-full -translate-y-7 -translate-x-12 -z-10 opacity-50"></span>
                  </h3>
                  <p className="text-sm lg:text-base max-w-7/10 sm:max-w-full mx-auto">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default FeatureSection

import React from 'react'

const FeatureSection = ({data}) => {
  return (
    <div className="bg-lightPink text-accentBrwn dark:bg-gray-800 dark:text-accentBrwn mt-[150dvh] py-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-baseline gap-x-10">
            {data?.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  className="featureCard font-bodoni w-[20%] h-[12%] flex flex-col gap-y-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                  data-aos-delay={`${(idx + 1) * 400}`}>
                  <h3 className="text-xl font-agraham relative z-10">
                    {item.title}
                    <span className="absolute h-15 w-15 bg-pink-300 rounded-full -translate-y-7 -translate-x-12 -z-10 opacity-50"></span>
                  </h3>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}

export default FeatureSection

import React from 'react'

const IngredientCard = ({data, isOdd, animationDelay}) => {
  return (
    <div className={`relative z-50 font-dmSans border-solid border-[1px] border-gray-300 dark:border-gray-700 dark:text-accentBrwn shadow-2xl cursor-pointer rounded-4xl overflow-hidden ${isOdd ? 'md:translate-y-10 translate-y-0' : ''}`} data-aos={isOdd ? 'fade-up' : 'fade-down'} data-aos-duration="800" data-aos-delay={animationDelay}>
      <picture>
        <img src={data.imgUrl}/>
      </picture>
      <div className="textPart w-full pt-1 px-2 h-48  bg-white dark:bg-gray-700">
        <h3 className='font-semibold lg:text-xl text-base mb-2'>{data.name}</h3>
        <p className='dark:text-lightPink lg:text-base text-sm text-justify'>{data.textContent}</p>
      </div>
    </div>
  )
}

export default IngredientCard

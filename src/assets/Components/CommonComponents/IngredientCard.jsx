import React from 'react'

const IngredientCard = ({data, isOdd, animationDelay}) => {
  return (
    <div className={`w-[15%] font-dmSans border-solid border-[1px] border-gray-300 dark:border-gray-700 dark:text-accentBrwn shadow-2xl rounded-4xl overflow-hidden ${isOdd ? 'translate-y-10' : ''}`} data-aos={isOdd ? 'fade-up' : 'fade-down'} data-aos-duration="800" data-aos-delay={animationDelay}>
      <picture>
        <img src={data.imgUrl}/>
      </picture>
      <div className="textPart w-full pt-1 px-2 h-45  bg-white dark:bg-gray-700">
        <h3 className='font-semibold text-xl mb-2'>{data.name}</h3>
        <p className='dark:text-lightPink'>{data.textContent}</p>
      </div>
    </div>
  )
}

export default IngredientCard

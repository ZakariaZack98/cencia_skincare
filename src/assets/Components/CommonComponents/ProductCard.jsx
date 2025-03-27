import React from 'react'
import Button from './Button'

const ProductCard = ({pid, imgUrl, name, retailPrice, preferredPrice, buyHandler, cartHandler}) => {
  return (
    <div className='w-[21dvw] p-5 border-2 border-solid border-accentBrwn rounded-xl bg-white dark:bg-gray-700 dark:text-lightPink font-dmSans mx-auto shadow-xl'>
      <picture>
        <img src={imgUrl} className='w-full h-[300px] object-cover object-center'/>
      </picture>
      <div className="textSec mt-1">
        <h3 className='text-2xl font-semibold max-h-25px'>{name}</h3>
        <p>Retail: <strike>{retailPrice}$</strike></p>
        <p>Preferred: {preferredPrice}$</p>
        <div className="btnDiv flex flex-col gap-y-0.5">
          <Button clickHandler={e => buyHandler(e)} label={'Buy Now'} id={pid}/>
          <Button clickHandler={e => cartHandler(e)} label={'Add to cart'} colorClass={'bg-pink-800'} id={pid}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

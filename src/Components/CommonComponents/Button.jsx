import React from 'react'

const Button = ({label, colorClass = 'bg-accentBrwn', clickHandler, id}) => {
  return (
    <button data-btn-value={id} className={`sm:px-6 px-3 sm:py-1.5 py-1 rounded-md ${colorClass} text-white lg:text-lg sm:text-base text-xs sm:font-bold font-medium mt-3 cursor-pointer duration-300 hover:bg-black hover:text-accentBrwn text-nowrap`} onClick={e => clickHandler(e)}>
      {label}
    </button>
  )
}

export default Button

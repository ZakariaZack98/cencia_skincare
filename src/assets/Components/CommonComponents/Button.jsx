import React from 'react'

const Button = ({label}) => {
  return (
    <button className='px-6 py-1.5 rounded-md bg-accentBrwn text-black text-lg font-bold mt-3 cursor-pointer duration-300 hover:bg-black hover:text-accentBrwn h'>
      {label}
    </button>
  )
}

export default Button

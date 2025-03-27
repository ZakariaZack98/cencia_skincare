import React from 'react'
import Navbar from '../../assets/Components/HomeComponents/Navbar'
import { getInstructionSliderData } from '../../lib/fetch'
import InstructionSlider from '../../assets/Components/HomeComponents/InstructionSlider';

const Shop = () => {
  const instructionSliderData = getInstructionSliderData();
  return (
    <>
      
      <InstructionSlider data={instructionSliderData}/>
    </>
  )
}

export default Shop

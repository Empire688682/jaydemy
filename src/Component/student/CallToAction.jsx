import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <div className='flex gap-6 items-center font-medium mt-4 '>
        <button className='rounded-md border py-2 px-10 bg-blue-600 text-white'>Get Started</button>
        <button className=' flex items-center gap-2 rounded-md bg-white border py-2 px-10'>Learn More <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CallToAction

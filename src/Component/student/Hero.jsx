import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/75'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the curses designed to <span className='text-blue-600'>fit your choice</span> <img src={assets.sketch} className='md:block hidden absolute -bottom-7 right-0' alt='sketch'/> </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut fugiat eveniet nesciunt sunt nostrum? Vitae sunt ex dolores error, culpa dignissimos, non quas veritatis architecto, ullam cumque eius soluta?</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut fugiat eveniet nesciunt sunt nostrum?</p>
    </div>
  )
}

export default Hero

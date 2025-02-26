import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col gap-10 justify-center items-start md:gap-32 py-10 border-b border-white/30 px-8 md:px-0 md:flex-row'>
        <div className='flex flex-col items-center w-full md:items-start'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quibusdam vel expedita aut sequi quasi delectus doloribus ex officiis. Non est nostrum doloremque ipsum deserunt cumque.</p>
        </div>
        <div className='flex flex-col items-center w-full md:items-start'>
          <h2 className='text-white text-xl font-semibold mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm items-center md:items-start'>
            <li className='text-white/80'><a href="#">Home</a></li>
            <li className='text-white/80'><a href="#">About us</a></li>
            <li className='text-white/80'><a href="#">Contact</a></li>
            <li className='text-white/80'><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className='flex flex-col items-center md:items-start w-full'>
          <h2 className='text-white text-xl font-semibold mb-5'>Subscribeto our newsletter</h2>
          <p className='text-sm text-white/80'>Lorem ipsum ipsam perferendis impedit dignissimos.</p>
          <div className='flex items-center pt-4 gap-2'>
            <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' type="email" placeholder='Enter your email' id="" />
            <button className='bg-blue-600 rounded text-white h-9 w-24'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>© 2023 JayEmpire. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer

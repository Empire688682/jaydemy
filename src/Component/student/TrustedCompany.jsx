import React from 'react'
import { assets } from '../../assets/assets'

const TrustedCompany = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex items-center justify-center flex-wrap gap-6 md:gap-16 md:mt-10 mt-5 '>
        <img src={assets.microsoft_logo} className='w-20 md:w-28' alt="Microsoft" />
        <img src={assets.walmart_logo} className='w-20 md:w-28' alt="Walmart" />
        <img src={assets.accenture_logo} className='w-20 md:w-28' alt="Accenture" />
        <img src={assets.adobe_logo} className='w-20 md:w-28' alt="adobe" />
        <img src={assets.paypal_logo} className='w-20 md:w-28' alt="Paypal" />
      </div>
    </div>
  )
}

export default TrustedCompany

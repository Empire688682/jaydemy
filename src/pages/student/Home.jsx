import React from 'react'
import Hero from '../../Component/student/hero'
import TrustedCompany from '../../Component/student/TrustedCompany'
import CoursesSection from '../../Component/student/CoursesSection'
import TestimoniaSection from '../../Component/student/TestimoniaSection'
import CallToAction from '../../Component/student/CallToAction'
import Footer from '../../Component/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <TrustedCompany/>
      <CoursesSection/>
      <TestimoniaSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home

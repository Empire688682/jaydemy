import React from 'react'
import Hero from '../../Component/student/hero'
import TrustedCompany from '../../Component/student/TrustedCompany'
import CoursesList from './CoursesList'
import CourseDetails from './CourseDetails'
import CoursesSection from '../../Component/student/CoursesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <TrustedCompany/>
      <CoursesSection/>
      <CoursesList/>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import CourseCart from './CourseCart'
import { UseGlobalContext } from '../../Context'

const CoursesSection = () => {
  const {allCouserses} = UseGlobalContext();
  return (
    <div className='py-16 md:py-40 px-8'>
      <h2>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tenetur, maiores mollitia <br /> amet totam, dolorem cumque numquam natus reiciendis necessitatibus quia saepe commodi?</p>
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 gap-4'>
      {
        allCouserses.slice(0,4).map((course, i)=> <CourseCart key={i} course={course}/>)
      }
      </div>
      <Link to="/course-list" onClick={()=> scrollTo(0,0)} className='text-gray-500 border m-y-10 border-gray-500/30 px-10 py-3 rounded '>See all courses</Link>
    </div>
  )
}

export default CoursesSection

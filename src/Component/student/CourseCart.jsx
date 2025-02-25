import React from 'react'
import { assets } from '../../assets/assets'
import { UseGlobalContext } from '../../Context';
import {Link} from 'react-router-dom';

const CourseCart = ({course}) => {
  const {currency, calculateTating} = UseGlobalContext()
  return (
    <Link to={`/course/${course._id}`} onClick={()=> scrollTo(0,0)} 
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg '>
      <img src={course.courseThumbnail} alt="" className='w-full' />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateTating(course)}</p>
          <div className='flex'>
            {Array.from({length: 5}).map((_,i)=>(
              <img key={i} src={i < Math.floor(calculateTating(course))? assets.star: assets.star_blank} alt="star" className='w-3.3 h-3.5' />
            ))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p className='text-base fornt-semibold text-gray-600'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100 ).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCart

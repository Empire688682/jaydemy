import React from 'react'
import { assets } from '../../assets/assets'
import { UseGlobalContext } from '../../Context'

const CourseCart = ({course}) => {
  const {currency} = UseGlobalContext()
  return (
    <div>
      <img src={course.courseThumbnail} alt="" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.education.name}</p>
        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_,i)=>(
              <img key={i} src={assets.star} alt="star" />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100 ).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCart

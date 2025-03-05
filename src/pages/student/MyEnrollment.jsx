import React, { useState } from 'react'
import { UseGlobalContext } from '../../Context'
import {Line} from "rc-progress"
import Footer from '../../Component/student/Footer';

const MyEnrollment = () => {
  const {enrolledCourse, calculateCourseDuration, navigate} = UseGlobalContext();
  const [progressArray, seyProgressArray] = useState([
    {lectureCompleted:2, totalLecture:6},
    {lectureCompleted:0, totalLecture:10},
    {lectureCompleted:5, totalLecture:7},
    {lectureCompleted:4, totalLecture:4},
    {lectureCompleted:3, totalLecture:6},
    {lectureCompleted:1, totalLecture:9},
    {lectureCompleted:6, totalLecture:8},
    {lectureCompleted:4, totalLecture:6}
  ])
  return (
    <>
      <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>MyEnrollment</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10 '>
          <thead className='text-gray-900 border border-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr >
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>
              <th className='px-4 py-3 font-semibold truncate'>Completed</th>
              <th className='px-4 py-3 font-semibold truncate'>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {
              enrolledCourse.map((course, i)=>(
                <tr key={i} className='border-b border-gray-500/20'>
                  <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                    <img src={course.courseThumbnail} alt="Img" className='w-14 h-20 sm:w-24 md:w-28'/>
                    <div className='flex-1'>
                      <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                      <Line strokeWidth={2} percent={progressArray[i] ? (progressArray[i].lectureCompleted * 100 / progressArray[i].totalLecture): 0} className='bg-gray-300 rounded-full'/>
                      <span>{(progressArray[i].lectureCompleted * 100 / progressArray[i].totalLecture).toFixed()}%</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 max-sm:hidden'>
                    {calculateCourseDuration(course)}
                  </td>
                  <td className='px-4 py-3 max-sm:hidden'>
                  {progressArray[i] && `${progressArray[i].lectureCompleted} / ${progressArray[i].totalLecture}`} <span>Lecture</span>
                  </td>
                  <td className='px-4 py-3 max-sm:text-right'>
                    <button className='px-3 sm:px-5 py-1.5 cm:py-2 bg-blue-600 text-white' onClick={()=>navigate(`/player/${course._id}`)}>{progressArray[i] && progressArray[i].totalLecture === progressArray[i].lectureCompleted ? "Completed" : "In Progress"}</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default MyEnrollment

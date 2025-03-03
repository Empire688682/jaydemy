import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseGlobalContext } from '../../Context';
import Loading from '../../Component/student/Loading';
import { assets } from '../../assets/assets';

const CourseDetails = () => {
  const { allCourses, calculateTating, calculateCourseChapterTime} = UseGlobalContext();
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === courseId);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData()
  }, []);


  return courseData ? (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 text-left'>
      <div className='absolute top-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>
      {/**Left colum*/}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:tesxt-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0, 200)}}></p>
        {/*review and ratings*/}
         <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                  <p>{calculateTating(courseData)}</p>
                  <div className='flex'>
                    {Array.from({length: 5}).map((_,i)=>(
                      <img key={i} src={i < Math.floor(calculateTating(courseData))? assets.star: assets.star_blank} alt="star" className='w-3.3 h-3.5' />
                    ))}
                  </div>
                  <p className='text-gray-500'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "ratings":"rating"}</p>
                  <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? "students":"student"}</p>
                </div>
                <p className='text-sm'>Course by <span className='cursor-pointer text-blue-600 underline'>JayEmpire</span></p>

                <div>
                <p>{calculateCourseChapterTime(courseData)}</p>
                </div>
      </div>
      {/*Rigth colum*/}
      <div>
        B
      </div>
    </div>
  )
  :
  <Loading/>
}

export default CourseDetails

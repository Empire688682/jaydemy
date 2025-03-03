import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseGlobalContext } from '../../Context';
import Loading from '../../Component/student/Loading';

const CourseDetails = () => {
  const { allCourses } = UseGlobalContext();
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
      <div>
        <h1>{courseData.courseTitle}</h1>
        <p dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0, 200)}}></p>
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

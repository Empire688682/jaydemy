import React, { useEffect, useState } from 'react';
import { UseGlobalContext } from '../../Context';
import SearchBar from '../../Component/student/SearchBar'
import CourseCart from '../../Component/student/CourseCart'
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import Footer from '../../Component/student/Footer';

const CoursesList = () => {
  const { navigate, allCourses } = UseGlobalContext();
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
  
      setFilteredCourse(
        input
          ? allCourses.filter(item =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          : allCourses
      );
    }
  }, [allCourses, input]);
  
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-700'>Courses List</h1>
            <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={() => navigate("/")}>Home</span> / <span>Course list</span></p>
          </div>
          <div>
            <SearchBar data={input} />
          </div>
        </div>
        {
          input && (
            <div className='inline-flex justify-between items-center mt-4 gap-4 px-4 py-2 border mt-8 border-gray-200 rounded text-gray-600'>
              <p>{filteredCourse && filteredCourse.length} results found</p>
              <img src={assets.cross_icon} alt="Cross_Icon" onClick={()=>navigate("/course-list")} />
            </div>
          )
        }
        <div className='grid grid-cols-1 sm:grid-cols-2 mid:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {
            filteredCourse && filteredCourse.length > 0 ? filteredCourse.map((course, i) => < CourseCart course={course} key={i} />)
            :
            <h2>No data available</h2>
          }
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default CoursesList

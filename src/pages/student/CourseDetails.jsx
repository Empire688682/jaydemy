import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseGlobalContext } from '../../Context';
import Loading from '../../Component/student/Loading';
import { assets } from '../../assets/assets';
import humanizerDuration from 'humanize-duration';

const CourseDetails = () => {
  const { allCourses, calculateTating, calculateCourseChapterTime, currency, calculateCourseDuration } = UseGlobalContext();
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});

  const fetchCourseData = async () => {
    const findCourse = allCourses.find(course => course._id === courseId);
    setCourseData(findCourse);
  };

  const toggleSection = (e) => {
    setOpenSection((prev) => ({ ...prev, [e]: !prev[e] }));
  }

  useEffect(() => {
    fetchCourseData()
  }, []);


  return courseData ? (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 text-left bg-gradient-to-b from-cyan-100/70'>
      <div className='absolute top-0 w-full h-section-height -z-1'></div>
      {/**Left colum*/}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:tesxt-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
        {/*review and ratings*/}
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
          <p>{calculateTating(courseData)}</p>
          <div className='flex'>
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} src={i < Math.floor(calculateTating(courseData)) ? assets.star : assets.star_blank} alt="star" className='w-3.3 h-3.5' />
            ))}
          </div>
          <p className='text-gray-500'>{courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "ratings" : "rating"}</p>
          <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? "students" : "student"}</p>
        </div>
        <p className='text-sm'>Course by <span className='cursor-pointer text-blue-600 underline'>JayEmpire</span></p>
        <div className='pt-8 text-gray-800'>
          <h2>Course Structure</h2>
          <div className='pt-5'>
            {
              courseData.courseContent.map((chapter, i) => (
                <div key={i} className='border border-gray-300 bg-white mb-2 rounded'>
                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(i)}>
                    <div className='flex items-center gap-2'>
                      <img src={`${assets.down_arrow_icon}`} alt='arrow icon' className={`transform transition-transform ${openSection[i] ? 'rotate-180' : ''}`} />
                      <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateCourseChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection[i] ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {
                        chapter.chapterContent.map((lecture, i) => (
                          <li key={i} className='flex items-center gap-2 py-1'>
                            <img src={assets.play_icon} alt="play_icon" className='w-4 h-4 mt-1' />
                            <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                              <p>{lecture.lectureTitle}</p>
                              <div className='flex gap-2'>
                                {
                                  lecture && <p className='text-blue-500 cursor-pointer'>Preview</p>
                                }
                                <p>{humanizerDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                              </div>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='py-10 text-sm md:text-default'>
          <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
          <p className='pt-3 rich-text' dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
        </div>
      </div>
      {/*Rigth colum*/}
      <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[400px]'>
        <img src={courseData.courseThumbnail} alt="courseThumbnail" />
        <div className='p-5'>
          <div className='flex items-center gap-2'>
            <img src={assets.time_clock_icon} alt="time_clock_icon" className='w-3.5' />
            <p className='text-red-500'><span className='font-medium'>5 days</span> left at this price</p>
          </div>
          <div className='flex items-center gap-3 pt-2'>
            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
            <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
          </div>

          <div className='flex items-center text-sm md:text-defaut gap-4 pt-2 md:pt-4 text-gray-500'>
            <div className='flex items-center gap-1'>
              <img src={assets.star} alt="atar-icon" />
              <p>{calculateTating(courseData)}</p>
            </div>
            <div className='h-4 w-px bg-gray-500/40'>
              <img src={assets.time_clock_icon} alt="clock_icon" />
              <p>{calculateCourseDuration()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    :
    <Loading />
}

export default CourseDetails

import React, { useEffect, useState } from 'react'
import Footer from '../../Component/student/Footer'
import { UseGlobalContext } from '../../Context'
import { assets } from '../../assets/assets'
import { useParams } from 'react-router-dom'
import humanizerDuration from 'humanize-duration'

const Player = () => {
  const { courseId } = useParams();
  const [playCourseData, setPlayCourseData] = useState(null);
  const { enrolledCourse, calculateCourseChapterTime } = UseGlobalContext();
  const [playData, setPlayData] = useState(null);
  const [openSection, setOpenSection] = useState({});

  const fetchCourseData = async () => {
    const findPlayCourse = enrolledCourse.find(course => course._id === courseId);
    setPlayCourseData(findPlayCourse);
  };

  const toggleSection = (e) => {
    setOpenSection((prev) => ({ ...prev, [e]: !prev[e] }));
  }

  useEffect(() => {
    fetchCourseData();
  }, [enrolledCourse]);

  return (
    <><div className='p-4 sm:p-10 flex flex-col-reverse md:grid-cols-2 gap-10 md:px-36'>
      {/** Left colum */}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='text-gray-800 font-semibold'>Course Structure</h1>
        <div className='pt-5'>
          {
            playCourseData && playCourseData.courseContent.map((chapter, i) => (
              <div key={i} className='border border-gray-300 bg-white mb-2 rounded'>
                <div
                  className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(i)}>
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
                                lecture && <p className='text-blue-500 cursor-pointer' onClick={() => setPlayData({
                                  videoId: lecture.lectureUrl.split("/").pop(),
                                })}>Preview</p>
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
      {/** Right colum */}
      <div>

      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Player

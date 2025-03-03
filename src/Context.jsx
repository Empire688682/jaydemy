import React, { useContext, useEffect, useState } from 'react';
import { dummyCourses } from './assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from "humanize-duration"
const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  }

  //Fetch all courses
  useEffect(()=>{
    fetchAllCourses();
  },[]);

  //Function to calculate average rating of course
  const calculateTating = (course) =>{
    if(course.courseRatings.length === 0){
      return 0;
    }
    let totalRating =  0;
    course.courseRatings.forEach(rating=>{
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length
  };

  //Function to calculate Course Chapter Time
  const calculateCourseChapterTime = (course) => {
    
  };

  
    


  return <AppContext.Provider value={{
    currency,
    allCourses,
    navigate,
    calculateTating,
    isEducator,
    setIsEducator,
    calculateCourseChapterTime
    }}>
    {children}
  </AppContext.Provider>
}

 const UseGlobalContext = () =>{
    return useContext(AppContext);
 }

 export {UseGlobalContext}


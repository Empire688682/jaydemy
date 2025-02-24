import React, { useContext, useEffect, useState } from 'react';
import { dummyCourses } from './assets/assets';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const [allCouserses, setAllCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  }

  useEffect(()=>{
    fetchAllCourses();
  },[]);

  return <AppContext.Provider value={{
    currency,
    allCouserses
    }}>
    {children}
  </AppContext.Provider>
}

 const UseGlobalContext = () =>{
    return useContext(AppContext);
 }

 export {UseGlobalContext}


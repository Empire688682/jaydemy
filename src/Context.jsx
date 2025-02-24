import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const [allCouserses, setAllCourses] = useState([]);

  return <AppContext.Provider value={{
    currency
    }}>
    {children}
  </AppContext.Provider>
}

 const UseGlobalContext = () =>{
    return useContext(AppContext);
 }

 export {UseGlobalContext}


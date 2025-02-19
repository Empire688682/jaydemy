import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  return <AppContext.Provider value={{hello:"Wuxup"}}>
    {children}
  </AppContext.Provider>
}

 const UseGlobalContext = () =>{
    return useContext(AppContext);
 }

 export {UseGlobalContext}


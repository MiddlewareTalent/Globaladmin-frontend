import React,{createContext, useState} from "react";
export const MyContext=createContext();

const MyProvider = ({children}) => {

    const[token, setToken]=useState(null);
    const updateToken=(newToken)=>setToken(newToken);
  return (
    <MyContext.Provider value={{token, updateToken}} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider
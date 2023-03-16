import React, {createContext, useContext, useState} from 'react';

const userThemeContext = createContext();


export function UserThemeContextProvider({children}) {
  const colorful = {
    text1: '#FFFFFF',
    text2: '#000000',
    bg1: '#3780a3',
    bg2: '#8AC7DB',
  };
  
  const dark = {
    text1: '#000000',
    text2: '#000000',
    bg1: '#000000',
    bg2: '#000000'}

 const [theme, setTheme] = useState({colorful})
  
  return (
    <userThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

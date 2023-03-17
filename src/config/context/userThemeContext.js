import React, {createContext, useContext, useState} from 'react';
import images from '../../navigations/DrawerBgImages';

const userThemeContext = createContext();

export function UserThemeContextProvider({children}) {
  const light = {
    name: 'light',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#3780a3',
    textbg2: '#8AC7DB',
    profpicborder: '#FFFFFF',
    drawerbg: '#FFFFFF',
  };

  const dark = {
    name: 'dark',
    text1: '#FFFFFF',
    text2: '#FFFFFF',
    textbg1: '#b3b3b3',
    textbg2: '#000000',
    profpicborder: '#b3b3b3',
    drawerbg: '#333333',
  };

  const [theme, setTheme] = useState(light);

  function setUserDarkTheme() {
    setTheme(dark);
  }
  function setUserLightTheme() {
    setTheme(light);
  }

  return (
    <userThemeContext.Provider
      value={{theme, setUserDarkTheme, setUserLightTheme}}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

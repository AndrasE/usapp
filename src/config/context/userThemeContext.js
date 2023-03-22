import React, {createContext, useContext, useState} from 'react';

const userThemeContext = createContext();

export function UserThemeContextProvider({children}) {
  const light = {
    name: 'light',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#63b4cf',
    textbg2: '#3780a3',
    profpicborder: '#FFFFFF',
    drawerbg: '#FFFFFF',
    togglebg: '#FFFFFF',
  };

  const origin = {
    name: 'light',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#63b4cf',
    textbg2: '#3780a3',
    profpicborder: '#FFFFFF',
    drawerbg: '#FFFFFF',
    togglebg: '#FFFFFF',
  };

  const dark = {
    name: 'dark',
    text1: '#FFFFFF',
    text2: '#FFFFFF',
    textbg1: '#5f5f5f',
    textbg2: '#000000',
    profpicborder: '#b3b3b3',
    drawerbg: '#333333',
    togglebg: '#333333',
  };

  const [theme, setTheme] = useState(light);

  function setUserTheme(value) {
    switch (value) {
      case 'dark':
        setTheme(dark);
        break;
      case 'light':
        setTheme(light);
        break;
      case 'origin':
        setTheme(origin);
        break;
    }
  }

  return (
    <userThemeContext.Provider value={{theme, setUserTheme}}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

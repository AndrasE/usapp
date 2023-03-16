import React, {createContext, useContext} from 'react';

const userThemeContext = createContext();

export function UserThemeContextProvider({children}) {
  const colorful = {
    text1: '#FFFFFF',
    text2: '#000000',
    bg1: '#3780a3',
    bg2: '#8AC7DB',
  };

  return (
    <userThemeContext.Provider value={{colorful}}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

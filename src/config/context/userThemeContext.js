import React, {createContext, useContext, useState} from 'react';
import images from '../../navigations/DrawerBgImages';

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

  const waifu = {
    name: 'origin',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#FF577F',
    textbg2: '#FF577F',
    profpicborder: '#FFACAC',
    drawerbg: '#FFACAC',
    togglebg: '#FFACAC',
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

  const [theme, setTheme] = useState(waifu);
  // required to dinamically load images, as React Native doesn't deal with dynamic images, only static images
  // get name of theme from userThemeContext and set the require path from DrawerBgImages.js
  // https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  const [imgSource, setImageSource] = useState(images.waifu.uri);
  const [toggleBtnState, setToggleBtnState] = useState(1);

  function setUserThemeFunction(value) {
    switch (value) {
      case 'light':
        setTheme(light);
        setImageSource(images.light.uri);
        setToggleBtnState(0);
        break;
      case 'waifu':
        setTheme(waifu);
        setImageSource(images.waifu.uri);
        setToggleBtnState(1);
        break;
      case 'dark':
        setTheme(dark);
        setImageSource(images.dark.uri);
        setToggleBtnState(2);
        break;
    }
  }

  return (
    <userThemeContext.Provider value={{theme, setUserThemeFunction, imgSource, toggleBtnState}}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

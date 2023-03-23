import React, {createContext, useContext, useState} from 'react';
import images from '../../navigations/DrawerBgImages';
import { useUserAuth } from './userAuthContext';
import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';

const userThemeContext = createContext();

export function UserThemeContextProvider({children}) {

  const {user} = useUserAuth();
  if (user) {
    console.log(user);
  }


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

  const small = {
    profPicsize: 75,
    headerImgHeight: 160,
    nameHeader: 27,
    emailHeader: 13,
    drawerItem: 15,
    drawerItemsIcon: 21,
    drawerItemMarginLeft: 55,
    preferencesText: 13,
  };

  const medium = {
    profPicsize: 80,
    headerImgHeight: 170,
    nameHeader: 29,
    emailHeader: 15,
    drawerItems: 17,
    drawerItemsIcon: 25,
    drawerItemMarginLeft: 52,
    preferencesText: 15,
  };

  const large = {
    profPicsize: 85,
    headerImgHeight: 180,
    nameHeader: 31,
    emailHeader: 17,
    drawerItems: 21,
    drawerItemsIcon: 30,
    drawerItemMarginLeft: 43,
    preferencesText: 17,
  };

  const [theme, setTheme] = useState(waifu);
  const [textSize, setTextSize] = useState(medium);
  // required to dinamically load images, as React Native doesn't deal with dynamic images, only static images
  // get name of theme from userThemeContext and set the require path from DrawerBgImages.js
  // https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  const [imgSource, setImageSource] = useState(images.waifu.uri);
  const [toggleThemeBtnState, setToggleThemeBtnState] = useState(1);
  const [toggleTextSizeBtnState, setTextSizeBtnState] = useState(1);

  function setUserThemeFunction(value) {
    switch (value) {
      case 'light':
        setTheme(light);
        setImageSource(images.light.uri);
        setToggleThemeBtnState(0);
        break;
      case 'waifu':
        setTheme(waifu);
        setImageSource(images.waifu.uri);
        setToggleThemeBtnState(1);
        break;
      case 'dark':
        setTheme(dark);
        setImageSource(images.dark.uri);
        setToggleThemeBtnState(2);
        break;
    }
  }

  function setUserTextSizeFunction(value) {
    switch (value) {
      case 'small':
        setTextSize(small);
        setTextSizeBtnState(0);
        break;
      case 'medium':
        setTextSize(medium);
        setTextSizeBtnState(1);
        break;
      case 'large':
        setTextSize(large);
        setTextSizeBtnState(2);
        break;
    }
  }

  return (
    <userThemeContext.Provider
      value={{
        theme,
        setUserThemeFunction,
        imgSource,
        toggleThemeBtnState,
        textSize,
        setUserTextSizeFunction,
        toggleTextSizeBtnState,
      }}>
      {children}
    </userThemeContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThemeContext);
}

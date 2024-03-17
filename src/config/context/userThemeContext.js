import React, {createContext, useContext, useState} from 'react';
import images from '../../navigations/DrawerBgImages(Preload)';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userThemeContext = createContext();

export function UserThemeContextProvider({children}) {
  // Theme Settings //
  const light = {
    name: 'light',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#63b4cf',
    textbg2: '#3780a3',
    profpicborder: '#FFFFFF',
    drawerbg: '#FFFFFF',
    togglebg: '#FFFFFF',
    appbg1: '#cce5f0',
    appbg2: '#93d1ed',
    drawerheader: '#63b4cf',
    bubbleleft:'#FFFFFF',
    bubbleright:'#63b4cf',
    bubblelefttext:'#63b4cf',
    bubblerighttext:'#FFFFFF',
  };

  const waifu = {
    name: 'waifu',
    text1: '#FFFFFF',
    text2: '#000000',
    textbg1: '#FF577F',
    textbg2: '#FF577F',
    profpicborder: '#FFACAC',
    drawerbg: '#FFACAC',
    togglebg: '#FFACAC',
    appbg1: '#FFACAC',
    appbg2: '#FF577F',
    drawerheader: '#FF577F',
    bubbleleft:'#FFFFFF',
    bubbleright:'#FF577F',
    bubblelefttext:'#FF577F',
    bubblerighttext:'#FF577F',
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
    appbg1: '#5f5f5f',
    appbg2: '#000000',
    drawerheader: '#000000',
    bubbleleft:'#333333',
    bubbleright:'#000000',
    bubblelefttext:'#FFFFFF',
    bubblerighttext:'#FFFFFF',
  };

  // Size Settings //
  const small = {
    profPicsize: 75,
    headerImgHeight: 160,
    nameHeader: 27,
    emailHeader: 13,
    drawerItem: 15,
    drawerItemsIcon: 21,
    drawerItemMarginLeft: 55,
    preferencesText: 13,
    btns: 17,
    lottieheight: 85,
    searchheader: 20,
    textinputsize: 15,
    textinputwidth: 140,
    modalpicheight: 90,
    drawerheaderheight: 51,
    bubbleheight: 46,
    bubblepadding: 1,
    bubbletextsize: 14,
    sendbuttonmarginbottom: 15,
    ioniconpaddingtop: 2
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
    btns: 19,
    lottieheight: 100,
    searchheader: 25,
    textinputsize: 20,
    textinputwidth: 150,
    modalpicheight: 100,
    drawerheaderheight: 56,
    bubbleheight: 51,
    bubblepadding: 4,
    bubbletextsize: 17,
    sendbuttonmarginbottom: 17,
    ioniconpaddingtop: 4
  };

  const large = {
    profPicsize: 85,
    headerImgHeight: 180,
    nameHeader: 31,
    emailHeader: 17,
    drawerItems: 20,
    drawerItemsIcon: 27,
    drawerItemMarginLeft: 38,
    preferencesText: 17,
    btns: 21,
    lottieheight: 115,
    searchheader: 30,
    textinputsize: 25,
    textinputwidth: 180,
    modalpicheight: 110,
    drawerheaderheight: 60,
    bubbleheight: 65,
    bubblepadding: 14,
    bubbletextsize: 22,
    sendbuttonmarginbottom: 19,
    ioniconpaddingtop: 7
  };

  const saveTheme = async value => {
    try {
      AsyncStorage.setItem('userTheme', value);
      console.log('New theme chosen by user:', value, '😎');
    } catch (err) {
      console.log(err);
    }
  };

  const getTheme = async () => {
    try {
      const userThemeAS = await AsyncStorage.getItem('userTheme');
      console.log('Applying user theme setting:', userThemeAS !== null ? userThemeAS : "light" , '🌈');

      switch (userThemeAS) {
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
    } catch (err) {
      console.log(err);
    }
  };

  const saveText = async value => {
    try {
      AsyncStorage.setItem('userText', value);
      console.log('New text-size chosen by user:', value, '🔠');
    } catch (err) {
      console.log(err);
    }
  };

  const getText = async () => {
    try {
      const userTextAS = await AsyncStorage.getItem('userText');
      console.log('Applying user size setting:', userTextAS !== null ? userTextAS : "normal" , '📐');

      switch (userTextAS) {
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
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getTheme();
    getText();
    console.log(
      '======================================================================',
    );
    console.log('Loading settings from Async-Storage 📦');
  }, []);

  const [theme, setTheme] = useState(light);
  const [textSize, setTextSize] = useState(medium);

  // required to dinamically load images, as React Native doesn't deal with dynamic images, only static images
  // get name of theme from userThemeContext and set the require path from DrawerBgImages.js
  // https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  const [imgSource, setImageSource] = useState(images.light.uri);
  const [toggleThemeBtnState, setToggleThemeBtnState] = useState(0);
  const [toggleTextSizeBtnState, setTextSizeBtnState] = useState(1);

  function setUserThemeFunction(value) {
    switch (value) {
      case 'light':
        setTheme(light);
        setImageSource(images.light.uri);
        setToggleThemeBtnState(0);
        saveTheme(value);
        break;
      case 'waifu':
        setTheme(waifu);
        setImageSource(images.waifu.uri);
        setToggleThemeBtnState(1);
        saveTheme(value);
        break;
      case 'dark':
        setTheme(dark);
        setImageSource(images.dark.uri);
        setToggleThemeBtnState(2);
        saveTheme(value);
        break;
    }
  }

  function setUserTextSizeFunction(value) {
    switch (value) {
      case 'small':
        setTextSize(small);
        setTextSizeBtnState(0);
        saveText(value);
        break;
      case 'medium':
        setTextSize(medium);
        setTextSizeBtnState(1);
        saveText(value);

        break;
      case 'large':
        setTextSize(large);
        setTextSizeBtnState(2);
        saveText(value);
        break;
    }
  }

  return (
    <userThemeContext.Provider
      value={{
        theme,
        textSize,
        setUserThemeFunction,
        imgSource,
        toggleThemeBtnState,
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

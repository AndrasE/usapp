import React, {useState, createContext, useContext, useEffect} from 'react';
import {_signInWithGoogle} from '../firebase/GoogleSingIn';
import auth from '@react-native-firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState();

  
  //handle user state changes on login saves user, needed to debounce it as onAuthStateChange has multiple states,so useEffect would run 2-3x times making the checkUserDB() and create a loop, or if trying to set a state withing the onAuthState change, as it runs through multiple states will create undefined object first few times which cant be used in checkUserDb(), a bit meh situation but debouncing will prevent this to happen https://stackoverflow.com/questions/37673616/firebase-android-onauthstatechanged-called-twice //
  var debounceTimeout;
  const DebounceDueTime = 200; // 200ms
  function onAuthStateChanged(user) {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      debounceTimeout = null;
      handleAuthStateChanged(user);
    }, DebounceDueTime);
  }
  // console.log(user);

  function handleAuthStateChanged(user) {
    setUser(user);
    // if (initializing) setInitializing(false);
    if (user !== null) {
      console.log('====> User is authenticated as:', user.email);
      // checkUserInDb(user);
    } else {
      console.log('====> User not found or signed out:', user);
    }
  }
  // console.log(".");
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function logOut() {
    auth()
      .signOut()
      .then(() => console.log('====> User signed out!'));
  }

  return (
    <userAuthContext.Provider value={{_signInWithGoogle, user, logOut}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

import React, {useState, createContext, useContext, useEffect} from 'react';
import {_signInWithGoogle} from '../config/configs(auth-db-cloudmsg)/GoogleSingIn';
import auth from '@react-native-firebase/auth';
import initalizeFirebaseDb from '../config/configs(auth-db-cloudmsg)/Firebase';
import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from 'firebase/database';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  //imported from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error || connect to firebaseDb//
  initalizeFirebaseDb;

  // const [initializing, setInitializing] = useState(true);
  // const [userDetails, setUserDetails] = useState();
  // const [users, setUsers] = useState([]);
  // const [userToAdd, setUserToAdd] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState();
  const [user, setUser] = useState();

  const checkUserInDb = async user => {
    console.log('====> Checking user in database with email:', user.email);
    console.log(
      '======================================================================',
    );

    const emailName = user.email.substring(0, user.email.indexOf('@'));
    try {
      const database = getDatabase();
      //first check if the user registered before
      const userObj = await findUser(emailName);
      if (userObj) {
        setMyData(userObj);
        console.log('====> Found in database with email:', user.email);
        console.log("sssssss", userObj);
      } else {
        const newUserObj = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          theme: 'light',
          text: 'normal',
        };
        set(ref(database, `users/${emailName}`), newUserObj);
        setMyData(newUserObj);
        console.log('====> User created in database with email:', user.email);
      }
    } catch (error) {
      console.error(error);
    }
    console.log('====> User in database:', myData);
    console.log(
      '======================================================================',
    );
  };
  //  console.log('====> User in Database:', myData);

  //finduser called in checkUserInDb
  const findUser = async emailName => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${emailName}`));
    return mySnapshot.val();
  };

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
      checkUserInDb(user);
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
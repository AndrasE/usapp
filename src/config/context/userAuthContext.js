import React, {useState, createContext, useContext, useEffect} from 'react';
import {_signInWithGoogle} from '../firebase/GoogleSingIn';
import auth from '@react-native-firebase/auth';
import initalizeFirebaseDb from '../firebase/Firebase';
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

  const [initializing, setInitializing] = useState(true);
  const [userDetails, setUserDetails] = useState();
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);
  const [user, setUser] = useState();

  const checkUserInDb = async () => {
    console.log('====================================');
    console.log(userDetails);
  };

  //  finduser called in checkUserInDb
  const findUser = async email => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${email}`));
    return mySnapshot.val();
  };

  //handle user state changes on login saves user
  function onAuthStateChanged(user) {
    if (user !== null) {
      setUserDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        theme: 'default',
      });
      if (initializing) setInitializing(false);
    } else {
      setUserDetails(null);
      setInitializing(true);
    }
  }

  if (userDetails !== null && initializing === false) {
    setTimeout(checkUserInDb, 1500);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function logOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <userAuthContext.Provider
      value={{initializing, _signInWithGoogle, userDetails, logOut}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

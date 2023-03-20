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
  const [user, setUser] = useState();
  const [email, setEmail] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);

  async function checkUserInDb(user) {
    console.log('checking user in db');
    console.log(user.email);
    console.log('====================================');
    try {
      const database = getDatabase();
      //first check if the user registered before

      const userObj = await findUser(email);

      if (userObj) {
        setMyData(userObj);
      } else {
        const newUserObj = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          theme: 'light',
        };

        set(ref(database, `users/${email}`), newUserObj);
        setMyData(newUserObj);
      }

      // console.log(database);
    } catch (error) {
      console.error(error);
    }
  }

  //finduser called in checkUserInDb
  const findUser = async email => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${email}`));
    return mySnapshot.val();
  };

  //handle user state changes on login saves user
  function onAuthStateChanged(user) {
    if (user != null) {
      setEmail(user.email);

      setUser({
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      });
      console.log(user);

      checkUserInDb(user);
    } else {
      setUser(null);
    }
    // console.log(user);
    if (initializing) setInitializing(false);
    // console.log('User initializing ===>', initializing);
    if (initializing) return null;
    // console.log('User initializing ===>', initializing);
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
      value={{user, initializing, _signInWithGoogle, logOut}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

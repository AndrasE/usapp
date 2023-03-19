import React, {useState, createContext, useContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
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
  //imported here  from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error:
  //Firebase: Need to provide options, when not being deployed to hosting via source. (app/no-options)
  initalizeFirebaseDb;

  //Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState(null);

  //react - native firebase GoogleSignin packadge
  const _signInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: false,
        scopes: ['profile', 'email'],
        webClientId:
          '826456309695-5bq3gscl5k02cp2bqq190r34egcf7gju.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // this.setState({ userInfo });
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredentials);
      // setUser({                                  <<<=== not needed to set it as react-native firebase pckd
      //   name: userInfo.user.name.split(' ')[0],  <<<=== will take care of it using onAuthStateChanged()
      //   email: userInfo.user.email,              <<<=== from '@react-native-firebase/auth'
      //   photoUrl: userInfo.user.photo,           <<<=== https://rnfirebase.io/auth/usage
      // });
    } catch (error) {
      console.log('Sign in error: ===>', error);
    }
  };

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
          theme: "light"
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

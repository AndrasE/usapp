import React, {useState, createContext, useContext, useEffect} from 'react';
import {useUserAuth} from './userAuthContext';
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

const userDbContext = createContext();

export function UserDbContextProvider({children}) {
  //imported from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error || connect to firebaseDb//
  initalizeFirebaseDb;

  // const [initializing, setInitializing] = useState(true);
  // const [userDetails, setUserDetails] = useState();
  // const [users, setUsers] = useState([]);
  // const [userToAdd, setUserToAdd] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);
  const [myData, setMyData] = useState();

  const {user} = useUserAuth();
  // if (user) {console.log(user);}

  const checkUserInDb = async user => {
    console.log(
      '====> Checking user in database with email:',
      user.email,
      '🔍',
    );
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
        console.log('====> Found in database with email:', user.email, '👈');
      } else {
        const newUserObj = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email
        };
        set(ref(database, `users/${emailName}`), newUserObj);
        setMyData(newUserObj);
        console.log(
          '====> User created in database with email:',
          user.email,
          '👉',
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  //finduser called in checkUserInDb
  const findUser = async emailName => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${emailName}`));
    return mySnapshot.val();
  };

  useEffect(() => {
    if (user) {
      checkUserInDb(user);
    } else {
      setMyData();
    }
  }, [user]);

  return (
    <userDbContext.Provider value={{myData}}>{children}</userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

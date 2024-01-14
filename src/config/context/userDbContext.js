import React, {useState, createContext, useContext, useEffect} from 'react';
import {useUserAuth} from './userAuthContext';
import initalizeFirebaseDb from '../firebase/Firebase';
import {getDatabase, get, ref, set} from 'firebase/database';

const userDbContext = createContext();

export function UserDbContextProvider({children}) {
  const [myData, setMyData] = useState();
  const [users, setUsers] = useState([]);

  const {user} = useUserAuth();

  //imported from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error || connect to firebaseDb//
  initalizeFirebaseDb;

  useEffect(() => {
    if (user) {
      checkUserInDb(user);
    } else {
      setMyData();
    }
  }, [user]);

  //if user exist check in db if not creating new user w details from auth
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
      const userObj = await findUser(emailName);

      if (userObj) {
        setMyData(userObj);
        console.log('====> Found in database with email:', user.email, '👈');
        setUsers(userObj.friends)
      } else {
        const newUserObj = {
          username: emailName,
          name: user.displayName.split(' ')[0],
          photo: user.photoURL,
          email: user.email,
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
    console.log(myData)
  };

  //finduser signed-in in database, creating snapsot of db
  const findUser = async emailName => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${emailName}`));
    return mySnapshot.val();
  };

  return (
    <userDbContext.Provider value={{myData, findUser, users}}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

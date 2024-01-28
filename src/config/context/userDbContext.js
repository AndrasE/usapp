import React, {useState, createContext, useContext, useEffect} from 'react';
import {useUserAuth} from './userAuthContext';
import initalizeFirebaseDb from '../firebase/Firebase';
import {getDatabase, get, ref, set, onValue} from 'firebase/database';

const userDbContext = createContext();

export function UserDbContextProvider({fcmToken, children}) {
  const [myData, setMyData] = useState(null);
  const [friends, setFriends] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const {user} = useUserAuth();
  // console.log(token)
  //imported from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error || connect to firebaseDb//
  initalizeFirebaseDb;

  useEffect(() => {
    if (user) {
      checkUserInDb(user);
      console.log("xxx", fcmToken)
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
        setFriends(userObj.friends);
      } else {
        const newUserObj = {
          username: emailName,
          name: user.displayName.split(' ')[0],
          photo: user.photoURL,
          email: user.email,
          fcmToken: fcmToken
        };
        set(ref(database, `users/${emailName}`), newUserObj);
        setMyData(newUserObj);
        console.log(
          '====> User created in database with email:',
          user.email,
          '👉',
        );
      }
      // set friends list change listener
      const myUserRef = ref(database, `users/${emailName}`);
      onValue(myUserRef, snapshot => {
        const data = snapshot.val();
        setFriends(data.friends);
        setMyData(prevData => ({
          ...prevData,
          friends: data.friends,
        }));
      });
    } catch (error) {
      console.error(error);
    }
  };

  //finduser signed-in in database, creating snapsot of db
  const findUser = async emailName => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${emailName}`));
    return mySnapshot.val();
  };

  const onClickUser = user => {
    setSelectedUser(user);
    console.log(
      '====> Heading over to chat with your friend,',
      user.friendsName+'. Be nice! 😇',
    );
    console.log(
      '======================================================================',
    );
  };

  return (
    <userDbContext.Provider value={{myData, findUser, friends, onClickUser, selectedUser}}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

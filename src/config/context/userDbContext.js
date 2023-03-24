import React, {useState, createContext, useContext} from 'react';
// import { useUserAuth } from './userAuthContext';
// import {
//   getDatabase,
//   get,
//   ref,
//   set,
//   onValue,
//   push,
//   update,
// } from 'firebase/database';

const userDbContext = createContext();

export function UserDbContextProvider({children}) {
  // const {user} = useUserAuth()
  //imported from Firebase.js so when authentication happen firebase is initalized as well, otherwise will be error || connect to firebaseDb//

  // const [initializing, setInitializing] = useState(true);
  // const [userDetails, setUserDetails] = useState();
  // const [users, setUsers] = useState([]);
  // const [userToAdd, setUserToAdd] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);
  // const [myData, setMyData] = useState();
//   const [userDb, setUserDb] = useState();
//   if (user) {
// console.log(user);  }

//  if (user !== null) {
//   checkUserInDb(user)
// }
// async function checkUserInDb (user)  {
  
//   console.log('====> Checking user in database with email:', user.email);
//   console.log("======================================================================")

//   const emailName = user.email.substring(0, user.email.indexOf('@'));
//   try {
//     const database = getDatabase();
//     //first check if the user registered before
//     const userObj = await findUser(emailName);
//     if (userObj) {
//       setMyData(userObj)
//       console.log('====> Found in Database with email:', user.email);
//     } else {
//       const newUserObj = {
//         name: user.displayName,
//         photo: user.photoURL,
//         email: user.email,
//         theme: 'light',
//         text: 'normal',
//       };
//       set(ref(database, `users/${emailName}`), newUserObj);
//       setMyData(newUserObj);
//       console.log('====> User created in Database with email:', user.email);
//     }
//   } catch (error) {
//     console.error(error);
//   }
  // console.log('====> User in Database:', myData);
//   console.log("======================================================================")
// };
//  console.log('====> User in Database:', myData);

//finduser called in checkUserInDb
// const findUser = async emailName => {
//   const database = getDatabase();
//   const mySnapshot = await get(ref(database, `users/${"emailName"}`));
//   return mySnapshot.val();
// };

  //handle user state changes on login saves user, needed to debounce it as onAuthStateChange has multiple states,so useEffect would run 2-3x times making the checkUserDB() and create a loop, or if trying to set a state withing the onAuthState change, as it runs through multiple states will create undefined object first few times which cant be used in checkUserDb(), a bit meh situation but debouncing will prevent this to happen https://stackoverflow.com/questions/37673616/firebase-android-onauthstatechanged-called-twice //
  // var debounceTimeout;
  // const DebounceDueTime = 200; // 200ms
  // function onAuthStateChanged(user) {
  //   if (debounceTimeout) clearTimeout(debounceTimeout);
  //   debounceTimeout = setTimeout(() => {
  //     debounceTimeout = null;
  //     handleAuthStateChanged(user);
  //   }, DebounceDueTime);
  // }
  
  // function handleAuthStateChanged(user) {
  //   setUser(user);
    // if (initializing) setInitializing(false);
    // if (user !== null) {
    //   console.log('====> User is authenticated already as:', user.email);
      // checkUserInDb(user);
    // } else {
    //   console.log('====> User not found or signed out:', user);
    // }
  // }
// console.log(".");
  
  return (
    <userDbContext.Provider
      value={{}}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

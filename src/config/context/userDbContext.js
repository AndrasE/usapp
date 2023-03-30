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
  const [searchedUserEmail, setSearchedUserEmail] = useState()
  const [searchedUserPic, setSearchedUserPic] = useState()

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
          username: emailName,
          name: user.displayName,
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
  };

  // //finduser signed-in in  database
  const findUser = async emailName => {
    const database = getDatabase();
    const mySnapshot = await get(ref(database, `users/${emailName}`));
    return mySnapshot.val();
  };

  // const onAddFriend = async name => {
  //   console.log('Searching for user:', name + '@gmail.com 🔍');
  //   try {
  //     //find user and add it to my friends and also add me to his friends
  //     const database = getDatabase();

  //     const user = await findUser(name);
  //     if (user) {
  //       // const who =  myData.friends.findIndex(f => f.username)
  //       // console.log(who);
  //       if (user.username === myData.username) {
  //         console.log('You cant add yourself as a friend!⛔');
  //         setSearchedUserPic(myData.photo);
  //         setSearchedUserEmail("You can`t add yourself as a friend, schizo..")
  //         return;
  //       }

  //       if (
  //         myData.friends &&
  //         myData.friends.findIndex(f => f.username) > -1
  //       ) {
  //         console.log('This friend already been added previously..😝');
  //         return;
  //       }

  //       // create a chatroom and store the chatroom id
  //       const newChatroomRef = push(ref(database, 'chatrooms'), {
  //         firstUser: myData.username,
  //         secondUser: user.username,
  //         messages: [],
  //       });

  //       const newChatroomId = newChatroomRef.key;

  //       const userFriends = user.friends || [];
  //       //join myself to this user friend list
  //       update(ref(database, `users/${user.name}`), {
  //         friends: [
  //           ...userFriends,
  //           {
  //             username: myData.username,
  //             photo: myData.photo,
  //             chatroomId: newChatroomId,
  //           },
  //         ],
  //       });

  //       const myFriends = myData.friends || [];
  //       //add this user to my friend list
  //       update(ref(database, `users/${myData.username}`), {
  //         friends: [
  //           ...myFriends,
  //           {
  //             username: user.username,
  //             photo: user.photo,
  //             chatroomId: newChatroomId,
  //           },
  //         ],
  //       });
  //       console.log(
  //         'User found and added as friend, chatroom created. Hurray!🎉',
  //       );
  //     } else {
  //       console.log('There is no such user registered, typo?🙄');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    if (user) {
      checkUserInDb(user);
    } else {
      setMyData();
    }
  }, [user]);

  return (
    <userDbContext.Provider value={{myData}}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

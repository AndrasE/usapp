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

  const [myData, setMyData] = useState();
  const [searchedUserPic, setSearchedUserPic] = useState();
  const [searchedUserName, setSearchedUserName] = useState();
  const [searchedMessege, setSearchedMessege] = useState();
  const [searchModal, setSearchModal] = useState(false);

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
  };

  // //finduser signed-in in  database
  const findUser = async emailName => {
    console.log("sd333");
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

  const onAddFriend = async name => {
    console.log("545565434544554");
    // if (name !== undefined && name.length > 3) {
    //   console.log('Searching for user:', name + '@gmail.com 🔍');
    //   try {
    //     //find user and add it to my friends and also add me to his friends
    //     const database = getDatabase();

    //     const user = await findUser(name);
    //     if (user) {
    //       // const who =  myData.friends.findIndex(f => f.username)
    //       // console.log(who);
    //       if (user.username === myData.username) {
    //         setSearchedUserPic(myData.photo);
    //         setSearchedUserName(myData.name);
    //         setSearchedMessege('You can`t add yourself as a friend, schizo..');
    //         setSearchModal(true);
    //         console.log('You cant add yourself as a friend!⛔');
    //         return;
    //       }
    //       if (
    //         myData.friends &&
    //         myData.friends.findIndex(f => f.username) > -1
    //       ) {
    //         setSearchedUserPic(user.photo);
    //         setSearchedUserName(user.name);
    //         setSearchedMessege('is already your friend.. Member?');
    //         setSearchModal(true);
    //         console.log('This friend already been added previously..😝');
    //         return;
    //       }
    //       // create a chatroom and store the chatroom id
    //       const newChatroomRef = push(ref(database, 'chatrooms'), {
    //         firstUserName: myData.name,
    //         secondUserName: user.name,
    //         messages: [],
    //       });

    //       const newChatroomId = newChatroomRef.key;

    //       const userFriends = user.friends || [];
    //       //join myself to this user friend list
    //       update(ref(database, `users/${user.username}`), {
    //         friends: [
    //           ...userFriends,
    //           {
    //             friendsName: myData.name,
    //             friendsPhoto: myData.photo,
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
    //             friendsName: user.name,
    //             friendsPhoto: user.photo,
    //             chatroomId: newChatroomId,
    //           },
    //         ],
    //       });
    //       setSearchedUserPic(user.photo);
    //       setSearchedUserName(user.name);
    //       setSearchedMessege('and you now friends. Be a good one!');
    //       setSearchModal(true);
    //       console.log(
    //         'User found and added as friend, chatroom created. Hurray!🎉',
    //       );
    //     } else {
    //       setSearchedUserPic(
    //         'https://www.pmlive.com/__data/assets/image/0017/450215/behavioural-economics.jpg',
    //       );
    //       // setSearchedUserName(value + ' ??');
    //       setSearchedMessege('There must be a typo somewhere!');
    //       setSearchModal(true);
    //       console.log('There is no such user registered, typo?🙄');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   console.log('You are truly a silly sausuge!🌭');
    // }
    // console.log(
    //   '======================================================================',
    // );
  };

  const closeSearchModal = () => {
    setSearchModal(!searchModal)
    setSearchedMessege("")
  }

  return (
    <userDbContext.Provider
      value={{
        myData,
        findUser,
        searchModal,
        searchedUserName,
        searchedUserPic,
        searchedMessege,
        onAddFriend,
        closeSearchModal
      }}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

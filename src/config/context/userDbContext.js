import React, {createContext, useContext, useState} from 'react';

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

    const [currentPage, setCurrentPage] = useState('login');
    const [username, setUsername] = useState(null);
    const [users, setUsers] = useState([]);
    const [userToAdd, setUserToAdd] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [myData, setMyData] = useState(null);
  
    const onLogin = async () => {
        try {
          const database = getDatabase();
          //first check if the user registered before
    
          const user = await findUser(username);
    
          //create a new user if not registered
          if (user) {
            setMyData(user);
          } else {
            const newUserObj = {
              username: username,
              avatar: 'https://i.pravatar.cc/150?u=' + Date.now(),
            };
    
            set(ref(database, `users/${username}`), newUserObj);
            setMyData(newUserObj);
          }
    
          // set friends list change listener
          const myUserRef = ref(database, `users/${username}`);
          onValue(myUserRef, snapshot => {
            const data = snapshot.val();
            setUsers(data.friends);
            setMyData(prevData => ({
              ...prevData,
              friends: data.friends,
            }));
          });
          setCurrentPage('users');
        } catch (error) {
          console.error(error);
        }
      };
      const findUser = async name => {
        const database = getDatabase();
    
        const mySnapshot = await get(ref(database, `users/${name}`));
    
        return mySnapshot.val();
      };
  return (
    <userDbContext.Provider
      value={{onLogin}}>
      {children}
    </userDbContext.Provider>
  );
}

export function useUserDb() {
  return useContext(userDbContext);
}

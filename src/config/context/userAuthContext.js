import React, {useState, createContext, useContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});

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
      console.log('sign in succesful by', userInfo.user.name.split(' ')[0]);
    } catch (error) {
      console.log('sign in error:', error);
    }
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <userAuthContext.Provider value={{user, _signInWithGoogle}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

import React, {useState, createContext, useContext} from 'react';
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
      await auth().signInWithCredential(googleCredentials);
      setUser({
        name: userInfo.user.name.split(' ')[0],
        email: userInfo.user.email,
        photoUrl: userInfo.user.photo,
      });
      console.log('sign in succesful by', userInfo.user.name.split(' ')[0]);
    } catch (error) {
      console.log('sign in error:', error);
    }
  };

  return (
    <userAuthContext.Provider value={{user, _signInWithGoogle}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

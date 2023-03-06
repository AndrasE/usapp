import React, {createContext, useState } from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const userAuthContext = createContext();

const USER = { isGuestUser: true } 

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(USER);

 function _signInWithGoogle() { async () => {
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
    setUser({
      isGuestUser: false,
      name: "asdasd",
      photoUrl: "someatuff"
    })
    console.log(user);

    return (userInfo);
  } catch (error) {
    console.log('=> Google Sign In Error:', error);
    return null;
  }
};
}


  return (
  <userAuthContext.Provider value={{user, _signInWithGoogle}}>
    {children}
  </userAuthContext.Provider>
  )
};

export default userAuthContext;

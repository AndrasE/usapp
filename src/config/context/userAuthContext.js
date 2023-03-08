import React, {useState, createContext, useContext, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
      console.log('User logged in as ===>', userInfo.user.name.split(' ')[0]);
    } catch (error) {
      console.log('Sign in error: ===>', error);
    }
  };

  // Handle user state changes on login saves user
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log('User is ===>', user);
    console.log('User initializing ===>', initializing);
    if (initializing) return null;
    console.log('User initializing ===>', initializing);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function logOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <userAuthContext.Provider
      value={{user, initializing, _signInWithGoogle, logOut}}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

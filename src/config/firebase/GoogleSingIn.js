import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcrW4flxv6Pi0ejQZ45IQ9psjFDnU8k6U",
  authDomain: "usapp-1d1ea.firebaseapp.com",
  databaseURL: "https://usapp-1d1ea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "usapp-1d1ea",
  storageBucket: "usapp-1d1ea.appspot.com",
  messagingSenderId: "826456309695",
  appId: "1:826456309695:web:ded484e944c7448a406b0a"
};

// Initialize Firebase


export const _signInWithGoogle = async () => {
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
    const user = {
      name: userInfo.user.name.split(" ")[0],
      email: userInfo.user.email,
      photoUrl: userInfo.user.photo
    }
    return (user);
    
  } catch (error) {
    console.log('=> Google Sign In Error:', error);
    return null;
  }
};

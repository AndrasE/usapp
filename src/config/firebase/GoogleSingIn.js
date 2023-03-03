import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { userAuthContext } from '../context/userAuthContext'

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

    return (userInfo);
  } catch (error) {
    console.log('=> Google Sign In Error:', error);
    return null;
  }
};

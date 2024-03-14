import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {WEBCLIENTID} from '@env';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      scopes: ['profile', 'email'],
      webClientId: WEBCLIENTID,
    });
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredentials);
    return;
  } catch (error) {
    console.log('=> Google Sign In Error:', error);
    return null;
  }
};

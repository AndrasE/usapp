import React from 'react';
import {ImageBackground, Text, TouchableWithoutFeedback} from 'react-native';
import Lottie from 'lottie-react-native';
import { useUserAuth } from '../config/context/userAuthContext';


export default function SignInScreen({ navigation }) {

  const { _signInWithGoogle } = useUserAuth();

   function handleSignIn() {
       _signInWithGoogle();
    };
 
  return (
    <ImageBackground
      source={require('../assets/signin.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
      }}>
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'SpaceMonoRegular',
          color: 'white',
          paddingBottom: 30,
          textAlign: 'center',
        }}>
        Sign-in with your Google account
      </Text>
      <TouchableWithoutFeedback onPress={() => handleSignIn()}>
        <Lottie
          style={{width: 200}}
          source={require('../assets/google-singin.json')}
          autoPlay
          loop={false}
          speed={1.2}
        />
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

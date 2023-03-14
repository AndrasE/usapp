import React, {useState} from 'react';
import Modal from "react-native-modal"
import {
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {useUserAuth} from '../config/context/userAuthContext';

export default function SignInScreen() {
  const {_signInWithGoogle} = useUserAuth();

  function handleSignIn() {
    _signInWithGoogle();
    setShowGif(100);
  }

  const [showGif, setShowGif] = useState(0);

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
      <Image
        source={require('../assets/loading.gif')}
        style={{
          height: 3,
          width: '100%',
          opacity: showGif,
          position: 'relative',
          bottom: 30,
        }}
      />
        <View>
      <Modal>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
}

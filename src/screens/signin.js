import React, {useState} from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {useUserAuth} from '../config/context/userAuthContext';
import {useUserTheme} from '../config/context/userThemeContext';

export default function SignInScreen() {
  const {_signInWithGoogle} = useUserAuth();
  const {theme, textSize} = useUserTheme();

  function handleSignIn() {
    _signInWithGoogle();
    setShowGif(100);
  }

  const [showGif, setShowGif] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

      <Text
        style={{
          fontFamily: 'SpaceMonoRegular',
          color: 'white',
          position: 'absolute',
          margin: 16,
          bottom: 10,
          textDecorationLine: 'underline',
          letterSpacing: 2,
        }}
        onPress={toggleModal}>
        privacy statement
      </Text>
      <View style={{flexDirection: 'column'}}>
        <Modal
          isVisible={isModalVisible}
          style={{
            paddingTop: 65,
            marginTop: 65,
            marginBottom: 75,
            paddingBottom: 55,
            marginLeft: 40,
            marginRight: 40,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignContent: 'center',
              // justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor: theme.textbg1,
              padding: 25,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                fontSize: textSize.nameHeader,
                margin: 16,
                letterSpacing: 3,
              }}>
              Privacy
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                lineHeight: 25,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                fontSize: textSize.emailHeader,
                margin: 16,
                lineHeight: 28,
              }}>
              He there, I hope to welcome you as one of US! You will be able to
              log out or delete all your data and any point after registration.
              This app was created by me, Andras and you also welcome to add me
              as friend and raise any concerns you may have. You also can find
              me here:
            </Text>
            <Text
              Text
              onPress={() =>
                Linking.openURL('https://andrasegyed.netlify.app/')
              }
              style={{
                textDecorationLine: 'underline',
                textAlign: 'justify',
                lineHeight: 25,
                fontFamily: 'SpaceMonoRegular',
                color: theme.text1,
                fontSize: textSize.emailHeader,
                marginBottom: 16,
                lineHeight: 28,
              }}>
              andrasegyed.netlify.app
            </Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 25,
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.0, 0.99]}
                colors={[theme.appbg1, theme.appbg2]}
                style={{padding: 2, borderRadius: 15}}>
                <Text
                  onPress={toggleModal}
                  style={{
                    textAlign: 'center',
                    fontFamily: 'SpaceMonoRegular',
                    color: 'white',
                    fontSize: textSize.btns,
                    top: -2,
                  }}>
                  got it
                </Text>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
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
    </ImageBackground>
  );
}

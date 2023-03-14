import React, {useState} from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import {
  Image,
  ImageBackground,
  Text,
  View,
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
          letterSpacing: 3,
        }}
        onPress={toggleModal}>
        privacy statement
      </Text>

      <Modal
        isVisible={isModalVisible}
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 75,
          marginBottom: 75,
          marginLeft: 45,
          marginRight: 45,
        }}>
        <View style={{}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'SpaceMonoRegular',
              color: 'black',
              fontSize: 30,
              margin: 16,
              bottom: 10,
              position: 'relative',
              top: -30,
              letterSpacing: 5,
            }}>
            Privacy
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              lineHeight: 25,
              fontFamily: 'SpaceMonoRegular',
              color: 'black',
              fontSize: 15,
              margin: 16,
              bottom: 10,
              letterSpacing: 1.2,

            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.0, 0.99]}
              colors={['#0065ff', '#6942ef']}
              style={{padding: 2, marginTop: 20, borderRadius: 15}}>
              <Text
                onPress={toggleModal}
                style={{
                  textAlign: 'center',
                  fontFamily: 'SpaceMonoRegular',
                  color: 'white',
                  fontSize: 18,

                  width: 70,
                }}>
                got it
              </Text>
            </LinearGradient>
          </View>
        </View>
      </Modal>

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

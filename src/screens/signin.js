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
import signinScreenStyles from '../styles/signinScreenStyles';

export default function SignInScreen() {
  const {_signInWithGoogle} = useUserAuth();
  const {theme, textSize} = useUserTheme();
  const styles = signinScreenStyles(theme, textSize);

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
      source={require('../assets/backgroundImage.jpg')}
      resizeMode={'cover'}
      style={styles.imageBackground}>
      <Text style={styles.textMain}>Sign-in with your Google account</Text>
      <TouchableWithoutFeedback onPress={() => handleSignIn()}>
        <Lottie
          style={{width: 200}}
          source={require('../assets/lottieAnimations/google-singin.json')}
          autoPlay
          loop={false}
          speed={1.2}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.textPrivacyStatementBtn} onPress={toggleModal}>
        privacy statement
      </Text>
      <View>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextMain}>Privacy</Text>
            <Text style={styles.modalTextSecondary}>
              Hi there, I hope to welcome you as one of US! You will be able to
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
              style={styles.modalTextLink}>
              andrasegyed.netlify.app
            </Text>
            <View style={styles.modalButtonView}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.0, 0.99]}
                colors={[theme.appbg1, theme.appbg2]}
                style={{padding: 2, borderRadius: 15}}>
                <Text
                  onPress={toggleModal}
                  style={styles.modalButtonLinearGradientText}>
                  got it
                </Text>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
      <Image
        source={require('../assets/loading.gif')}
        style={{...styles.loadingGif, ...{opacity: showGif}}}
      />
    </ImageBackground>
  );
}

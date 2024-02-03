import React from 'react';
import {Text, ImageBackground, Button} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';

export default function HomeScreen() {
 
  return (
    <ImageBackground
      source={require('../assets/backgroundImage.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 30,
      }}>
      <Lottie
        style={{paddingTop: 70, height: 170}}
        source={require('../assets/lottieAnimations/search.json')}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </ImageBackground>
  );
}

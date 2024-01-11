import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
import splashScreenStyles from '../styles/splashScreenStyles';

export default function SplashScreen() {
  const styles = splashScreenStyles();

  return (
    <ImageBackground
      source={require('../assets/signin.jpg')}
      resizeMode={'cover'}
      style={styles.imageBackground}>
      <Animated.View entering={FadeIn.duration(500).delay(100)}>
        <Text style={styles.animatedViewTextFirstLine}>Welcome</Text>
        <Text style={styles.animatedViewTextSecondLine}>to</Text>
        <Text style={styles.animatedViewTextSpan}></Text>
      </Animated.View>

      <Lottie
        source={require('../assets/splash.json')}
        autoPlay={true}
        loop={false}
        speed={0.7}
      />
      <Animated.View entering={FadeIn.duration(600).delay(600)}>
        <Text style={styles.animatedViewThirdLine}>us</Text>
      </Animated.View>
    </ImageBackground>
  );
}

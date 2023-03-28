import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';

export default function SplashScreen() {
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
      <Animated.View entering={FadeIn.duration(500).delay(100)}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'SpaceMonoRegular',
            color: 'white',
            letterSpacing: 5,
            marginBottom: 55,
            alignItems: "flex-start"
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: 'SpaceMonoRegular',
            fontSize: 25,
            color: 'white',
            textAlign: "center"
          }}>
          to
        </Text>
        <Text
          style={{
            marginTop: 165,
          }}>
        </Text>
      </Animated.View>
     
      <Lottie
        source={require('../assets/splash.json')}
        autoPlay={true}
        loop={false}
        speed={0.7}
      />
      <Animated.View entering={FadeIn.duration(600).delay(600)}>
        <Text
          style={{
            letterSpacing: 2.5,
            fontFamily: 'SpaceMonoRegular',
            fontSize: 75,
            color: '#fff',
            marginBottom: 75
          }}>
          us
        </Text>
      </Animated.View>
    </ImageBackground>
  );
}

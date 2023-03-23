import React from 'react';
import {Text, ImageBackground, Button} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';

export default function HomeScreen() {
 
  return (
    <ImageBackground
      source={require('../assets/signin.jpg')}
      resizeMode={'cover'}
      style={{
        flex: 1,
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
            paddingTop: 75,
          }}>
          Hi there!
        </Text>
      </Animated.View>
      <Animated.View entering={FadeIn.duration(500).delay(250)}>
        <Text
          style={{
            fontFamily: 'SpaceMonoRegular',
            fontSize: 25,
            marginTop: 68,
            color: 'white',
            letterSpacing: 5,
          }}>
          Nice to have you here..
        </Text>
      </Animated.View>
      <Lottie
        style={{paddingTop: 70, height: 170}}
        source={require('../assets/search.json')}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Animated.View entering={FadeIn.duration(500).delay(250)}>
        <Text
          style={{
            paddingTop: 100,
            fontFamily: 'SpaceMonoRegular',
            fontSize: 20,
            marginTop: 68,
            color: 'white',
            letterSpacing: 5,
            textAlign: 'center',
          }}>
          Search for other users by their gmail and start chatting
        </Text>
      </Animated.View>
    </ImageBackground>
  );
}

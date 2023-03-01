import React from 'react';
import { Text, ImageBackground } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Lottie from 'lottie-react-native';

export default function SplashScreen({ navigation }) {

    setTimeout(() => {
      this.anim.play()
    }, 1000);
    setTimeout(() => {
      navigation.navigate("signIn")
    }, 2100);

  return (
    <ImageBackground
      source={require('../assets/signin.jpg')}
      resizeMode={'cover'}
      style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30 }}>
      <Animated.View
        entering={FadeIn.duration(500).delay(100)}
      >
        <Text style={{ fontSize: 35, fontFamily: "SpaceMonoRegular", color: 'white', letterSpacing: 5 }}>Welcome</Text>
      </Animated.View>
      <Animated.View
        entering={FadeIn.duration(500).delay(250)}
      >
        <Text style={{ fontFamily: "SpaceMonoRegular", fontSize: 25, marginTop: 68, color: "black", padding: 55 }}>to</Text>
      </Animated.View>
      <Lottie style={{ paddingTop: 70 }} source={require('../assets/splash.json')} autoPlay={false} loop={false} speed={0.7} ref={animation => { this.anim = animation }}
      />
      <Animated.View
        entering={FadeIn.duration(600).delay(800)}
      >
        <Text style={{ letterSpacing: 2.5, fontFamily: "SpaceMonoRegular", fontSize: 75, paddingTop: 25, color: "#fff" }}>us</Text>
      </Animated.View>
    </ImageBackground>
  );
}

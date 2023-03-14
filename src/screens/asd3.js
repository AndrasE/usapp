import React from 'react';
import {Text, ImageBackground} from 'react-native';

export default function Asd3Screen() {
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
          letterSpacing: 5,
        }}>
        ASD3333333
      </Text>
    </ImageBackground>
  );
}

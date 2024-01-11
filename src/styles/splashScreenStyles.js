import {StyleSheet} from 'react-native';

const splashScreenStyles = () =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    },
    animatedViewTextFirstLine: {
      fontSize: 35,
      fontFamily: 'SpaceMonoRegular',
      color: 'white',
      letterSpacing: 5,
      marginBottom: 55,
      alignItems: 'flex-start',
    },
    animatedViewTextSecondLine: {
      fontFamily: 'SpaceMonoRegular',
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
    },
    animatedViewTextSpan: {
      marginTop: 165,
    },
    animatedViewThirdLine: {
      letterSpacing: 2.5,
      fontFamily: 'SpaceMonoRegular',
      fontSize: 75,
      color: '#fff',
      marginBottom: 75,
    },
  });

export default splashScreenStyles;

import {StyleSheet} from 'react-native';

const searchScreenStyles = (textSize, theme) =>
  StyleSheet.create({
    linearGradientBackground: {
      padding: 40,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lottie: {
      height: textSize.lottieheight,
      position: 'relative',
      top: -15,
    },
    text: {
      fontSize: textSize.searchheader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      textAlign: 'center',
      marginBottom: 15,
    },
  });

export default searchScreenStyles;

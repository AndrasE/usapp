import {StyleSheet} from 'react-native';

const signinScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    },
    textMain: {
      fontSize: 35,
      fontFamily: 'SpaceMonoRegular',
      color: 'white',
      paddingBottom: 30,
      textAlign: 'center',
    },
    textPrivacyStatementBtn: {
      fontFamily: 'SpaceMonoRegular',
      color: 'white',
      position: 'absolute',
      margin: 16,
      bottom: 10,
      textDecorationLine: 'underline',
      letterSpacing: 2,
    },
    modal: {
      paddingTop: 65,
      marginTop: 65,
      marginBottom: 75,
      paddingBottom: 55,
      marginLeft: 40,
      marginRight: 40,
    },
    modalView: {
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: theme.textbg1,
      padding: 25,
    },
    modalTextMain: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: textSize.nameHeader,
      margin: 16,
      letterSpacing: 3,
    },
    modalTextSecondary: {
      textAlign: 'justify',
      lineHeight: 25,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: textSize.emailHeader,
      margin: 16,
      lineHeight: 28,
    },
    modalTextLink: {
      textDecorationLine: 'underline',
      textAlign: 'justify',
      lineHeight: 25,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: textSize.emailHeader,
      marginBottom: 16,
      lineHeight: 28,
    },
    modalButtonView: {
      padding: 25,
    },
    modalButtonLinearGradientText: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      color: 'white',
      fontSize: textSize.btns,
      top: -2,
    },
    loadingGif: {
      height: 3,
      width: '100%',
      position: 'relative',
      bottom: 30,
    },
  });

export default signinScreenStyles;

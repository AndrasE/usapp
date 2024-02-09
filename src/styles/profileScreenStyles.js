import {StyleSheet} from 'react-native';

const profileScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
    },
    profileView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImageStyle: {
      height: textSize.profPicsize + 20,
      width: textSize.profPicsize + 20,
      borderRadius: 40,
      justifyContent: 'center',
      borderColor: theme.text1,
      borderWidth: 1,
    },
    textName: {
      fontSize: textSize.searchheader + 5,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      textAlign: 'center',
    },
    textEmail: {
      fontSize: textSize.searchheader - 5,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
      marginBottom: 15,
    },
    hrContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 15,
    },
    hrStyle: {
      flex: 1,
      height: 1,
      backgroundColor: theme.text1,
    },
    hrText: {
      fontWeight: 400,
      textAlign: 'center',
      color: theme.text2,
      fontSize: textSize.preferencesText,
      fontFamily: 'SpaceMonoRegular',
      letterSpacing: 2,
      color: theme.text1,
    },
    statsView: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    statsFirstRow: {
      width: ' 50%',
      marginBottom: 15,
    },
    statsHeader: {
      fontSize: textSize.emailHeader + 2,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
      marginBottom: 10,
      textDecorationLine: 'underline',
    },
    statsContent: {
      fontSize: textSize.emailHeader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
    },
    statsSecondRow: {width: '50%'},
    secondaryView: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop:textSize.emailHeader +15, 
      fontSize: textSize.emailHeader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      textAlign: 'center',
    },
    lottie: {
      height: textSize.lottieheight + textSize.lottieheight,
      position: 'relative',
      bottom: 25,
    },
  });

export default profileScreenStyles;

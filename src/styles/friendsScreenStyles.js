import {StyleSheet} from 'react-native';

const chatsScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      borderBottomColor: theme.textbg1,
      borderBottomWidth: 1.2,
    },
    photos: {
      width: textSize.profPicsize - 20,
      height: textSize.profPicsize - 20,
      marginRight: 10,
      borderRadius: 10,
    },
    names: {
      color: theme.text1,
      fontSize: textSize.searchheader - 4,
      fontFamily: 'SpaceMonoRegular',
    },
    mainView2: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    linearGradientBackground2: {
      padding: 40,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    secondaryView: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      position: "relative",
      bottom: "10%"
    },
    text: {
      fontSize: textSize.searchheader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      textAlign: 'center',

    },
    lottie: {
      height: textSize.lottieheight + textSize.lottieheight,
      position: "relative",
      bottom: 35,
    
    },
  });

export default chatsScreenStyles;

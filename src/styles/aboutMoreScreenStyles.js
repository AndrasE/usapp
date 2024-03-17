import {StyleSheet} from 'react-native';

const aboutMoreScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      flex: 1,
    },
    contentView: {
      marginTop: 15,
      marginHorizontal: 15,
      padding: 15,
    },
    headerView: {},
    header: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.textinputsize,
      color: theme.text1,
    },
    headerIcon: {
      textAlign: 'center',
      position: 'relative',
      paddingBottom: 30,
    },
    subHeader: {
      textAlign: 'center',
      paddingTop: 40,
      paddingBottom: 10,
      color: theme.text1,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: theme.text1,
    },
    paragraph: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      color: theme.text1,
    },
    link: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      color: theme.text1,
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: theme.text1,
    },
    lottie: {
      margin: 10,
      alignSelf: 'center',
      width: 120,
      height: 120,
    },
  });

export default aboutMoreScreenStyles;

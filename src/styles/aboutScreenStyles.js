import {StyleSheet} from 'react-native';

const aboutScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      flex: 1,
    },
    contentView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: 15,
      marginHorizontal: 15,
      padding: 15,
    },
    headerView: {
      flexDirection: 'row',
    },
    header: {
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.searchheader,
      color: theme.text1,
      marginBottom: 10,
    },
    headerIcon: {
      position: 'relative',
      top: textSize.ioniconpaddingtop,
      transform: [{rotate: '15deg'}],
    },
    paragraph: {
      paddingTop: 10,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.searchheader,
      color: theme.text1,
      fontSize: textSize.btns,
      textAlign: "center"
    },
    buttonLinearGradient: {
      padding: 3,
      borderRadius: 15,
      marginTop: 20,
      marginBottom: 20,
      alignSelf: "center"
    },
    buttonText: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: textSize.btns,
      position: 'relative',
      letterSpacing: 2,
      top: -2,
    },
  });

export default aboutScreenStyles;

import {StyleSheet} from 'react-native';

const chatScreenStyles = (theme, textSize) =>
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      paddingTop: 5,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.searchheader,
      color: theme.text1,
      fontSize: textSize.btns,
    },
  });

export default chatScreenStyles;

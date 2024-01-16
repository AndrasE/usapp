import {StyleSheet} from 'react-native';

const chatScreenStyles = (theme, textSize) =>
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
  });

export default chatScreenStyles;

import {StyleSheet} from 'react-native';

const chatScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      flex: 1,
    },
    dayDate: {
      color: '#ffff',
      fontSize: textSize.bubbletextsize - 3,
    },
    bubbleTextLeft: {
      paddingTop: textSize.bubblepadding,
      color: theme.bubblelefttext,
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleTextRight: {
      paddingTop: textSize.bubblepadding,
      color: '#ffff',
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleWrapperLeft: {
      backgroundColor: theme.bubbleleft,
    },
    bubbleWrapperRight: {
      backgroundColor: theme.bubbleright,
      borderWidth: 1,
      borderColor: '#ffff',
    },
    bubbleTimeStampLeft: {
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleTimeStampRight: {
      fontFamily: 'SpaceMonoRegular',
    },
    inputToolBar: {
      backgroundColor: theme.appbg2,
      borderTopColor: '#ffff',
    },
    textInputStyle: {
      marginTop: textSize.bubbletextsize - 5,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.bubbletextsize,
    },
    sendIconContainer: {
      marginBottom: textSize.sendbuttonmarginbottom,
    },
    sendIcon: {
      fontSize: textSize.bubbletextsize + 10,
      paddingHorizontal: 10,
    },
  });

export default chatScreenStyles;

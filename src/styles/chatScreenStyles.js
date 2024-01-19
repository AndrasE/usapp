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
      paddingTop: 18,
      color: theme.bubblelefttext,
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleTextRight: {
      color: '#ffff',
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleWrapperLeft: {
      // height: textSize.bubbleheight,
      backgroundColor: theme.bubbleleft,
    },
    bubbleWrapperRight: {
      backgroundColor: theme.bubbleright,
      borderWidth: 1,
      borderColor: '#ffff',
    },
    bubbleTimeStampLeft: {
      fontFamily: 'SpaceMonoRegular',
      textAlign: 'right',
      color: theme.bubbleright,
    },
    bubbleTimeStampRight: {
      fontFamily: 'SpaceMonoRegular',

      color: '#3c3c434d',
      textAlign: 'right',
      color: theme.bubbleleft,
    },
  });

export default chatScreenStyles;

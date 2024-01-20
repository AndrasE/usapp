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
      paddingTop: 12,
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
    },
    bubbleTimeStampRight: {
      fontFamily: 'SpaceMonoRegular',
    },
    inputToolBar: {
      backgroundColor: theme.appbg2,
      borderTopWidth: 1 ,
      borderTopColor: '#ffff',
      paddingTop: textSize.bubblepadding - 1
     },
     textInputStyle: {
      lineHeight: textSize.bubbletextsize + 1 ,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.bubbletextsize
     },
     sendIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
     },
     sendIcon: {
      fontSize: textSize.bubbletextsize + 5,
      paddingBottom: textSize.bubblepadding - 1,
      paddingRight: 5,
     }
  });

export default chatScreenStyles;

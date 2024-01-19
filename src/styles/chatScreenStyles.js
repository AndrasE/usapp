import {StyleSheet} from 'react-native';

const chatScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      flex: 1,
    },
    bubbleTextLeft: {
      paddingTop: 18,
      color: theme.bubblelefttext,
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleTextRight: {
      paddingTop: 18,
      color: '#ffff',
      fontSize: textSize.bubbletextsize,
      fontFamily: 'SpaceMonoRegular',
    },
    bubbleWrapperLeft: 
      {
        height: textSize.bubbleheight,
        backgroundColor: theme.bubbleleft,
      },
      bubbleWrapperRight: {
        height: textSize.bubbleheight,
        backgroundColor: theme.bubbleright,
        borderWidth: 1,
        borderColor: "#ffff"
      }
    
  });

export default chatScreenStyles;

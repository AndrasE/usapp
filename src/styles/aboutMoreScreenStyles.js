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
      fontSize: textSize.textinputsize,
      color: theme.text1,
      paddingBottom: 10,
    },
    headerIcon: {
      position: 'relative',
      top: textSize.ioniconpaddingtop-1,
    },
    subHeader: {
      paddingTop: 20,
      paddingBottom:10,
      color: theme.text1,
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: theme.text1,
    },
    paragraph: {
      textAlign: "justify",
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      color: theme.text1,
    },
    link: {
      textAlign: "justify",
      fontFamily: 'SpaceMonoRegular',
      fontSize: textSize.preferencesText,
      color: theme.text1,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: theme.text1,
    },
  });

export default aboutMoreScreenStyles;

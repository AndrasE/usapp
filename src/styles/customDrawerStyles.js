import {StyleSheet} from 'react-native';

const customDrawerStyles = (theme, textSize) =>
  StyleSheet.create({
    drawerMainView: {
      flex: 1,
      paddingBottom: 5,
      backgroundColor: theme.drawerbg,
    },
    drawerCoverImage: {
      height: textSize.headerImgHeight,
      width: '100%',
      marginBottom: 6,
    },
    profileImage: {
      height: textSize.profPicsize,
      width: textSize.profPicsize,
      borderRadius: 40,
      marginTop: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
      borderColor: theme.text1,
      borderWidth: 1,
    },
    profleNameText: {
      fontSize: textSize.nameHeader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 4,
      marginRight: 10,
      textAlign: 'right',
    },
    profileEmailText: {
      fontSize: textSize.emailHeader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      marginRight: 10,
      textAlign: 'right',
    },
    switchSelectorView: {
      marginLeft: 9,
      marginRight: 9,
      marginBottom: 5,
    },
    preferencesLabel: {
      fontWeight: 400,
      textAlign: 'center',
      color: theme.text2,
      fontSize: textSize.preferencesText - 2,
      fontFamily: 'SpaceMonoRegular',
      letterSpacing: 2,
    },
    horizontalRuleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    horizontalRule: {
      flex: 1,
      height: 1,
      backgroundColor: theme.textbg2,
    },
  });

export default customDrawerStyles;

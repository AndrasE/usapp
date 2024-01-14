import {StyleSheet} from 'react-native';

const profileScreenStyles = (theme, textSize) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
    },
    linearGradientBackground: {
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
    },
    profileImageView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImageStyle: {
      height: textSize.profPicsize + 20,
      width: textSize.profPicsize + 20,
      borderRadius: 40,
      justifyContent: 'center',
      borderColor: theme.text1,
      borderWidth: 1,
    },
    textName: {
      fontSize: textSize.searchheader + 5,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 3,
      textAlign: 'center',
    },
    textEmail: {
      fontSize: textSize.searchheader - 5,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
      marginBottom: 35,
    },
    hrStyle: {
      flex: 1,
      height: 1,
      backgroundColor: theme.text1,
    },
    hrText: {
      fontWeight: 400,
      textAlign: 'center',
      color: theme.text2,
      fontSize: textSize.preferencesText,
      fontFamily: 'SpaceMonoRegular',
      letterSpacing: 2,
      color: theme.text1,
    },
    statsView: {
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    statsFirstRow: {
      width: ' 50%',
      marginBottom: 15,
    },
    statsHeader: {
      fontSize: textSize.emailHeader + 2,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
      marginBottom: 10,
      textDecorationLine: 'underline',
    },
    statsContent: {
      fontSize: textSize.emailHeader,
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      letterSpacing: 2,
      textAlign: 'center',
    },
    statsSecondRow: {width: ' 50%'},
    dangerZoneView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 50,
    },
    dangerZoneTextView: {
      marginTop: 15,
      flex: 1,
    },
    dangerZoneText: {
      fontSize: textSize.searchheader - 5,
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: textSize.btns,
      position: 'relative',
      letterSpacing: 2,
      top: -2,
    },
    deleteButton: {alignItems: 'center', paddingTop: 15},
    linearGradientButton: {
      padding: 3,
      borderRadius: 5,
      marginTop: 20,
      marginBottom: 20,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    linearGradientButtonText: {
      textAlign: 'center',
      fontFamily: 'SpaceMonoRegular',
      color: theme.text1,
      fontSize: 25,
      position: 'relative',
      top: -2,
    },
  });

export default profileScreenStyles;

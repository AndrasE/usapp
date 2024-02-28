import {StyleSheet} from 'react-native';

const drawerNavigatorStyles = (textSize, theme) =>
  StyleSheet.create({
    drawerBackIcon: {
      width: textSize.drawerItemsIcon,
      height: textSize.drawerItemsIcon,
      marginLeft: 5,
      opacity: 0.7,
    },
    drawerOpenIconView: {
      position: 'absolute',
      flex: 1,
      height: 200,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerOpenIcon: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 170,
      marginBottom: 170,
      height: textSize.drawerItemsIcon + 15,
      width: textSize.drawerItemsIcon,
      opacity: 0.4,
    },
  });

export default drawerNavigatorStyles;

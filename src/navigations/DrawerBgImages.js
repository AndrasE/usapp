// required to dinamically load images, see more at:
// https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names

const images = {
  light: {
    uri: require('../assets/drawerCoverImages/lightdrawercover.jpg')
  },
  waifu: {
    uri: require('../assets/drawerCoverImages/waifudrawercover.png'),
  },
  dark: {
    uri: require('../assets/drawerCoverImages/darkdrawercover.jpg'),
  },
};

export default images;

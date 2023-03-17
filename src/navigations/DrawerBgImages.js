// required to dinamically load images, see more at:
// https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names

const images = {
  light: {
    uri: require('../assets/lightdrawercover.jpg'),
  },
  dark: {
    uri: require('../assets/darkdrawercover.jpg'),
  },
};

export default images;

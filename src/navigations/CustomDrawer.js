import {Text, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useUserAuth} from '../config/context/userAuthContext';
import {useUserTheme} from '../config/context/userThemeContext';
import images from './DrawerBgImages';
import SwitchSelector from 'react-native-switch-selector';

const CustomDrawer = props => {
  const {user, logOut} = useUserAuth();
  const profileImgUrl = user.photoURL;

  const {theme, setUserTheme} = useUserTheme();

  function handleLogoutClick() {
    logOut();
  }

  function handleUserThemeChoice(value) {
    setUserTheme(value);
  }

  // required to dinamically load images, as React Native doesn't deal with dynamic images, only static images
  // get name of theme from userThemeContext and set the require path from DrawerBgImages.js
  // https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  let imgSource = null;

  if (theme.name == 'light') {
    imgSource = images.light.uri;
  }
  if (theme.name == 'dark') {
    imgSource = images.dark.uri;
  } else {
    imgSource = images.light.uri;
  }

  return (
    <View style={{flex: 1, paddingBottom: 5, backgroundColor: theme.drawerbg}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0, paddingBottom: 0}}>
        <ImageBackground
          source={imgSource}
          style={{height: 170, width: '100%', marginBottom: 6}}>
          <Image
            source={{uri: profileImgUrl}}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              margin: 10,
              alignSelf: 'flex-end',
              borderColor: theme.text1,
              borderWidth: 1,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 5,
              marginRight: 10,
              textAlign: 'right',
            }}>
            {' '}
            {user.displayName.split(' ')[0]}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'SpaceMonoRegular',
              color: theme.text1,
              letterSpacing: 3,
              marginRight: 10,
              textAlign: 'right',
            }}>
            {' '}
            {user.email}
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{marginLeft: 9, marginRight: 9, marginBottom: 5}}>
        <SwitchSelector
          initial={1}
          fontSize={15}
          selectedTextStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          textStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          height={45}
          borderWidth={1.5}
          borderRadius={5}
          padding={11}
          onPress={value => {
            handleUserThemeChoice(value);
          }}
          textColor={theme.text2}
          backgroundColor={theme.togglebg}
          selectedColor={theme.text1}
          buttonColor={theme.textbg2}
          borderColor={theme.textbg2}
          hasPadding
          options={[
            {label: 'light', value: 'light'},
            {label: 'waifu', value: 'origin'},
            {label: 'dark', value: 'dark'},
          ]}
        />
      </View>
      <DrawerItem
        inactiveBackgroundColor={theme.textbg2}
        inactiveTintColor={theme.text1}
        icon={({color, size}) => (
          <Icon
            name="exit-outline"
            color={color}
            size={25}
            style={{marginLeft: 50}}
          />
        )}
        label="Sign Out"
        labelStyle={{
          fontFamily: 'SpaceMonoRegular',
          letterSpacing: 2,
          fontSize: 17,
        }}
        onPress={() => {
          handleLogoutClick();
        }}
      />
    </View>
  );
};

export default CustomDrawer;

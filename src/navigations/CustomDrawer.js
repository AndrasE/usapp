import {Text, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
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
  const {theme, setUserThemeFunction, imgSource, toggleBtnState, textSize} =
    useUserTheme();

  const profileImgUrl = user.photoURL;

  function handleLogoutClick() {
    logOut();
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
              fontSize: textSize.nameHeader,
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
              fontSize: textSize.emailHeader,
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
        style={{marginBottom: 7}}
          initial={toggleBtnState}
          fontSize={textSize.drawerItems}
          selectedTextStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          textStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          height={45}
          borderWidth={1.5}
          borderRadius={5}
          onPress={value => {
            setUserThemeFunction(value);
          }}
          textColor={theme.text2}
          backgroundColor={theme.togglebg}
          selectedColor={theme.text1}
          buttonColor={theme.textbg2}
          borderColor={theme.textbg2}
          hasPadding
          options={[
            {label: 'light', value: 'light'},
            {label: 'waifu', value: 'waifu'},
            {label: 'dark', value: 'dark'},
          ]}
        />
        <SwitchSelector
        style={{marginBottom: 20}}
          initial={toggleBtnState}
          fontSize={textSize.drawerItems}
          selectedTextStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          textStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          height={45}
          borderWidth={1.5}
          borderRadius={5}
          onPress={value => {
            setUserThemeFunction(value);
          }}
          textColor={theme.text2}
          backgroundColor={theme.togglebg}
          selectedColor={theme.text1}
          buttonColor={theme.textbg2}
          borderColor={theme.textbg2}
          hasPadding
          options={[
            {label: 's', value: 'light'},
            {label: 'm', value: 'waifu'},
            {label: 'l', value: 'dark'},
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
            size={textSize.drawerItemsIcon}
            style={{marginLeft: 50}}
          />
        )}
        label="Sign Out"
        labelStyle={{
          fontFamily: 'SpaceMonoRegular',
          letterSpacing: 2,
          fontSize: textSize.drawerItems,
        }}
        onPress={() => {
          handleLogoutClick();
        }}
      />
    </View>
  );
};

export default CustomDrawer;

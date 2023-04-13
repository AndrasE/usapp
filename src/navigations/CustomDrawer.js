import {Text, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useUserAuth} from '../config/context/userAuthContext';
import {useUserDb} from '../config/context/userDbContext';
import {useUserTheme} from '../config/context/userThemeContext';
import SwitchSelector from 'react-native-switch-selector';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
// import Sound from 'react-native-sound';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const {logOut} = useUserAuth();
  const {myData} = useUserDb();
  const {
    theme,
    setUserThemeFunction,
    imgSource,
    toggleThemeBtnState,
    textSize,
    setUserTextSizeFunction,
    toggleTextSizeBtnState,
  } = useUserTheme();

  const profileImgUrl = myData.photo;

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
          style={{
            height: textSize.headerImgHeight,
            width: '100%',
            marginBottom: 6,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={{uri: profileImgUrl}}
              style={{
                height: textSize.profPicsize,
                width: textSize.profPicsize,
                borderRadius: 40,
                marginTop: 20,
                marginRight: 10,
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
                letterSpacing: 4,
                marginRight: 10,
                textAlign: 'right',
              }}>
              {' '}
              {myData.name}
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
              {myData.email}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{marginLeft: 9, marginRight: 9, marginBottom: 5}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <View style={{flex: 1, height: 1, backgroundColor: theme.textbg2}} />
          <View>
            <Text
              style={{
                fontWeight: 400,
                textAlign: 'center',
                color: theme.text2,
                fontSize: textSize.preferencesText - 2,
                fontFamily: 'SpaceMonoRegular',
                letterSpacing: 2,
              }}>
              {' '}
              preferences{' '}
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: theme.textbg2}} />
        </View>
        <SwitchSelector
          style={{marginBottom: 7}}
          initial={toggleThemeBtnState}
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
          style={{marginBottom: 12}}
          initial={toggleTextSizeBtnState}
          fontSize={textSize.drawerItems}
          selectedTextStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          textStyle={{fontFamily: 'SpaceMonoRegular', letterSpacing: 3}}
          height={45}
          borderWidth={1.5}
          borderRadius={5}
          onPress={value => {
            setUserTextSizeFunction(value);
          }}
          textColor={theme.text2}
          backgroundColor={theme.togglebg}
          selectedColor={theme.text1}
          buttonColor={theme.textbg2}
          borderColor={theme.textbg2}
          hasPadding
          options={[
            {label: 'sm', value: 'small'},
            {label: 'm', value: 'medium'},
            {label: 'lg', value: 'large'},
          ]}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.textbg2}}
            />
            <View
              style={{flex: 1, height: 1, backgroundColor: theme.textbg2}}
            />
          </View>
        </View>
      </View>

      <DrawerItem
        inactiveBackgroundColor={theme.textbg2}
        inactiveTintColor={theme.text1}
        icon={({color, size}) => (
          <Icon
            name="exit-outline"
            color={color}
            size={textSize.drawerItemsIcon}
            style={{marginLeft: textSize.drawerItemMarginLeft}}
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

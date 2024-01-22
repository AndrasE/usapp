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
import customDrawerStyles from '../styles/customDrawerStyles';


const CustomDrawer = props => {
  const navigation = useNavigation();

  const {logOut, user} = useUserAuth();
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
  const profileImgUrl = user.photoURL;
  const profileName = user.displayName.split(' ')[0]
  const profileEmail = user.email

  const styles = customDrawerStyles(theme, textSize);

  function handleLogoutClick() {
    logOut();
  }

  return (
    <View style={styles.drawerMainView}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0, paddingBottom: 0}}>
        <ImageBackground source={imgSource} style={styles.drawerCoverImage}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={{uri: profileImgUrl}} style={styles.profileImage} />
            <Text style={styles.profleNameText}> {profileName}</Text>
            <Text style={styles.profileEmailText}> {profileEmail}</Text>
          </TouchableOpacity>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.switchSelectorView}>
        <View style={styles.horizontalRuleView}>
          <View style={styles.horizontalRule} />
          <View>
            <Text style={styles.preferencesLabel}> preferences </Text>
          </View>
          <View style={styles.horizontalRule} />
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
            <View style={styles.horizontalRule} />
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

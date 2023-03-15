import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useUserAuth} from '../config/context/userAuthContext';

const CustomDrawer = props => {
  const {user} = useUserAuth();
  const profileImgUrl = user.photoURL;

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0}}>
        <ImageBackground
          source={require('../assets/drawercover.jpg')}
          style={{height: 170, width: '100%', marginBottom: 15}}>
          <Image
            source={{uri: profileImgUrl}}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              margin: 10,
              alignSelf: 'flex-end',
              borderColor: 'white',
              borderWidth: 1,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'SpaceMonoRegular',
              color: 'white',
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
              color: 'white',
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
    </View>
  );
};

export default CustomDrawer;
// const styles = StyleSheet.create({})

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
        contentContainerStyle={{backgroundColor: '#186d9c'}}>
        <ImageBackground
          source={require('../assets/drawercover.jpg')}
          style={{height: 170, width: '100%'}}>
          <Image
            source={{uri:profileImgUrl}}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              margin: 20,
              alignSelf: 'flex-end',
            }}
          />
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View>
        <Text>alloooo</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
// const styles = StyleSheet.create({})

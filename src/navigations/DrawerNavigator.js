import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {HomeScreen, AsdScreen, Asd2Screen, Asd3Screen} from './ScreensImport';

import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#3780a3",
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          marginLeft: 30,
          fontFamily: 'SpaceMonoRegular',
          letterSpacing: 2,
          fontSize: 17
        }
      }}
      swipeEdgeWidth={500}>
      <Drawer.Screen name="Chats" component={HomeScreen} 
       options={{
        title: 'Home',
        drawerIcon: ({focused, color, size}) => (
          <Icon name="hipchat" size={18} color={color} />
        ),
      }}
      
      
      />
      <Drawer.Screen name="Penis" component={AsdScreen} />
      <Drawer.Screen name="Pussy" component={Asd2Screen} />
      <Drawer.Screen name="Cheese" component={Asd3Screen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
// const styles = StyleSheet.create({})

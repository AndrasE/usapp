import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {HomeScreen, AsdScreen, Asd2Screen} from './ScreensImport';
import {useUserTheme} from '../config/context/userThemeContext';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const {theme} = useUserTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme.textbg1,
        drawerActiveTintColor: theme.text1,
        drawerInactiveTintColor: theme.text2,
        drawerLabelStyle: {
          fontFamily: 'SpaceMonoRegular',
          letterSpacing: 2,
          fontSize: 17,
        },
      }}
      swipeEdgeWidth={500}>
      <Drawer.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: 'Chats',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-chatbubble-ellipses-outline"
              size={25}
              color={color}
              style={{marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={AsdScreen}
        options={{
          title: 'Search',
          drawerIcon: ({color, size}) => (
            <Icon
              name="search-sharp"
              size={25}
              color={color}
              style={{marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatGpt"
        component={Asd2Screen}
        options={{
          title: 'ChatGpt',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-git-compare"
              size={25}
              color={color}
              style={{marginLeft: 50}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Theme"
        component={Asd2Screen}
        options={{
          title: 'Theme',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-partly-sunny-outline"
              size={25}
              color={color}
              style={{marginLeft: 50}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
// const styles = StyleSheet.create({})

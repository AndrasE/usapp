import React from 'react';
import {Image, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {HomeScreen, AsdScreen, SearchScreen, Asd3Screen} from './ScreensImport';
import {useUserTheme} from '../config/context/userThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const ToggleDrawer = () => {
  const {toggleDrawer, closeDrawer, openDrawer} = useNavigation();
};
const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  const {theme, textSize} = useUserTheme();

  return (
    <Drawer.Navigator
      backBehavior="history"
      initialRouteName="Chats"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}>
            <Image
              source={require('../assets/back.png')}
              style={{
                width: textSize.drawerItemsIcon,
                height: textSize.drawerItemsIcon,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
        ),
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.drawerheader,
          height: textSize.drawerheaderheight,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: theme.text1,
          fontFamily: 'SpaceMonoRegular',
          fontSize: textSize.drawerItemsIcon - 2,
          letterSpacing: 3,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        drawerActiveBackgroundColor: theme.textbg1,
        drawerActiveTintColor: theme.text1,
        drawerInactiveTintColor: theme.text2,
        drawerLabelStyle: {
          fontFamily: 'SpaceMonoRegular',
          letterSpacing: 2,
          fontSize: textSize.drawerItems,
        },
        headerTintColor: theme.text1,
      })}
      swipeEdgeWidth={500}>
      <Drawer.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: 'Chats',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-chatbubble-ellipses-outline"
              size={textSize.drawerItemsIcon}
              color={color}
              style={{marginLeft: textSize.drawerItemMarginLeft}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          drawerIcon: ({color, size}) => (
            <Icon
              name="search-sharp"
              size={textSize.drawerItemsIcon}
              color={color}
              style={{marginLeft: textSize.drawerItemMarginLeft}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AsdScreen"
        component={AsdScreen}
        options={{
          title: 'ChatGpt',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-git-compare"
              size={textSize.drawerItemsIcon}
              color={color}
              style={{marginLeft: textSize.drawerItemMarginLeft}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Theme"
        component={Asd3Screen}
        options={{
          title: 'Theme',
          drawerIcon: ({color, size}) => (
            <Icon
              name="md-partly-sunny-outline"
              size={textSize.drawerItemsIcon}
              color={color}
              style={{marginLeft: textSize.drawerItemMarginLeft}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

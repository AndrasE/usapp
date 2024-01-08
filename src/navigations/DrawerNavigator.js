import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {
  ChatScreen,
  HomeScreen,
  ProfileScreen,
  AsdScreen,
  SearchScreen,
} from './ScreensImport';
import {useUserTheme} from '../config/context/userThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const {theme, textSize} = useUserTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
              source={require('../assets/backicon.png')}
              style={{
                width: textSize.drawerItemsIcon,
                height: textSize.drawerItemsIcon,
                marginLeft: 5,
                opacity: 0.7,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              position: 'absolute',
              flex: 1,
              height: 200,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              top: windowHeight * 0.49,
              right: windowWidth * 0.88,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <Image
                source={require('../assets/drawericon.png')}
                style={{
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 170,
                  marginBottom: 170,
                  height: textSize.drawerItemsIcon + 15,
                  width: textSize.drawerItemsIcon,
                  opacity: 0.45,
                }}></Image>
            </TouchableOpacity>
          </View>
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
        name="Profile"
        component={ProfileScreen}
        options={{drawerItemStyle: {display: 'none'}}}
      />
      <Drawer.Screen
        name="Chats"
        component={ChatScreen}
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
          title: 'About',
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
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

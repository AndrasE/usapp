import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {
  FriendsScreen,
  ProfileScreen,
  AsdScreen,
  SearchScreen,
  ChatScreen,
} from './ScreensImport';
import {useUserTheme} from '../config/context/userThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import drawerNavigatorStyles from '../styles/drawerNavigatorStyles';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const {theme, textSize} = useUserTheme();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const styles = drawerNavigatorStyles(textSize);

  return (
    <Drawer.Navigator
      backBehavior="history"
      initialRouteName="Friends"
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
              style={styles.drawerBackIcon}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              ...styles.drawerOpenIconView,
              ...{top: windowHeight * 0.49, right: windowWidth * 0.88},
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <Image
                source={require('../assets/drawericon.png')}
                style={styles.drawerOpenIcon}></Image>
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
        name="Friends"
        component={FriendsScreen}
        options={{
          title: 'Friends',
          drawerIcon: ({color}) => (
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
          drawerIcon: ({color}) => (
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
          drawerIcon: ({color}) => (
            <Icon
              name="md-git-compare"
              size={textSize.drawerItemsIcon}
              color={color}
              style={{marginLeft: textSize.drawerItemMarginLeft}}
            />
          ),
        }}
      />
      {/* this is hidden only exist to be managed by navigator*/}
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: 'Chat',
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

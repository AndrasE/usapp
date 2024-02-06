import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import { LogLevel, OneSignal } from 'react-native-onesignal';
// import messaging from '@react-native-firebase/messaging';
// import {PermissionsAndroid} from 'react-native';
// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

function RootNavigator() {
  // await splash screen to finish the animation and firebase to get connected and establish //
  // if the user is authenticated and call homestack to conditinally render //
  const [splash, setSplash] = useState(true);
  const {user} = useUserAuth();

  setTimeout(() => {
    setSplash(false);
  }, 1200);

  if (splash === true) {
    return <SplashScreen />;
  } else {
    if (user) {
      console.log(
        '====> User in database:',
        user.displayName.split(' ')[0],
        '🧡 Welcome on board, you are one of US!🧡',
      );
      console.log(
        '======================================================================',
      );
      // If myData exist ergo user logged in and databse found/created returning Homescreen, otherwise Login screen//
      return <HomeStack />;
    } else {
      return <SignInScreen />;
    }
  }

  function HomeStack() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

export default function App() {
  // const [token, setToken] = useState('');

  // // messaging().onMessage(async remoteMessage => {
  // //   console.log('Message handled in the backgrossaund!', remoteMessage);
  // // });
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // function requestAndroidPermission() {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  // }

  // async function requestUserPermission() {
  //   const authorizationStatus = await messaging().requestPermission();
  
  //   if (authorizationStatus) {
  //     console.log('Permission status:', authorizationStatus);
  //   }
  // }

 

  useEffect(() => {
    
  //   const setUpCloudMessaging = async () => {
  //     requestUserPermission();

  //     const token = await messaging().getToken();
  //     console.log('Token is ' + token);
  //   };
  //   setUpCloudMessaging();

  // Remove this method to stop OneSignal Debugging
 OneSignal.Debug.setLogLevel(LogLevel.Verbose);

 // OneSignal Initialization
 OneSignal.initialize("e5d90d7e-2a17-4f58-a879-8346fbdccceb");

 // requestPermission will show the native iOS or Android notification permission prompt.
 // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
 OneSignal.Notifications.requestPermission(true);

 // Method for listening for notification clicks
 OneSignal.Notifications.addEventListener('click', (event) => {
   console.log('OneSignal: notification clicked:', event);
 });

 OneSignal.login("123456789");
  }, []);

  // Necessary to wrap the Home/Login stacks in order to have access to the Context //
  // <userAuthContext.Provider value={{...}}> {children} </userAuthContext.Provider> //
  return (
    <UserAuthContextProvider>
      <UserDbContextProvider>
        <UserThemeContextProvider>
          <RootNavigator />
        </UserThemeContextProvider>
      </UserDbContextProvider>
    </UserAuthContextProvider>
  );
}

import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import {messaging, onMessage, onNotification, onNotificationOpened} from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/messaging';


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
        user.name,
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

// Necessary to wrap the Home/Login stacks in order to have access to the Context //
// <userAuthContext.Provider value={{...}}> {children} </userAuthContext.Provider> //

export default function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    firebase.messaging().getToken()
  .then(fcmToken => {
    if (fcmToken) {
      console.log(fcmToken)
      setToken(fcmToken)
      // user has a device token
    } else {
      // user doesn't have a device token yet
    } 
  });
  }, []);


//     //check whether the initalapp is available
    // messaging()
    //   .getInitalNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused the app to opeb from quit state',
    //         remoteMessage.notification,
    //       );
    //     }
    //   });

//     //type data payload of the screen to open

//     messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log(
//         'Notification caused the app to opeb from quit state',
//         remoteMessage.notification,
//       );
//     });
//   }, []);

  return (
    <UserAuthContextProvider>
      <UserDbContextProvider fcmToken={token}>
        <UserThemeContextProvider >
          <RootNavigator />
        </UserThemeContextProvider>
      </UserDbContextProvider>
    </UserAuthContextProvider>
  );
}

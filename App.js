import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { ONESIGNALID } from '@env';
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
    const {user} = useUserAuth();
    const emailName = user.email.substring(0, user.email.indexOf('@'));

    // is user logged in redirected to homestack where we set up OneSignal 
    useEffect(() => {
      // Remove this method to stop OneSignal Debugging
     OneSignal.Debug.setLogLevel(LogLevel.Verbose);
   
     // OneSignal Initialization
     OneSignal.initialize(ONESIGNALID);
    
     // requestPermission will show the native iOS or Android notification permission prompt.
     OneSignal.Notifications.requestPermission(true);
    
     // Method for listening for notification clicks
     OneSignal.Notifications.addEventListener('click', (event) => {
       console.log('OneSignal: notification clicked:', event);
     });
    
     // Log in user for OneSignal service
     OneSignal.login(emailName);
      }, []);



    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

export default function App() {



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

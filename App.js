import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import {initializeOnesignal} from './src/config/firebase/OnesignalFunctions';
import DrawerNavigator from './src/navigations/DrawerNavigator';

function RootNavigator() {
  // await splash screen to finish the animation check authorization and firebase to get connected //
  // if the user is authenticated and navigate to homestack or sign in screen //
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
        '====> User in database: Hi',
        user.displayName.split(' ')[0] + '!',
        'Welcome on board, you are one of US! 🧡',
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

    // is user logged in redirected to here(homestack) where we set-up OneSignal
    useEffect(() => {
      initializeOnesignal(emailName);
    }, []);

    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

export default function App() {
  // UserAuthContextProvider handles GoogleSignin from '@react-native-google-signin, onAuthStateChanged(user) from RN firebase subscribe to the users current authentication state, receive an event whenever that state changes. If user doesn`t log out remain authenticated in the app, doesn`t need to sign in again.
  // Using a few details captured pass info on to UserDbContextProvider where if the user was signed in before capture in database with the allocated data or setup a new user
  // UserThemeContextProvider handles the theme and textsize settings saving changes using AsyncStorage from '@react-native-async-storage/async-storage' loading appt with the saved settings
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

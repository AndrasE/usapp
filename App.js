import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import { UserDbContextProvider } from './src/config/context/userDbContext';
import { useUserDb } from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';

function RootNavigator() {
  // await splash screen to finish the animation and firebase to get connected and establish //
  // if the user is authenticated and call homestack to conditinally render stacks//
  // const [splash, setSplash] = useState(true);
  const {user} = useUserAuth();
  // const {stuff} = useUserDb();

  // console.log(stuff);

  // console.log("asdasdasd", myData);
  // setTimeout(() => {
  //   setSplash(false);
  // }, 1700);

  // if (splash === true) {
  //   return <SplashScreen />;
  // } else {
  return <HomeStack />;
  // }

  // If user exist ergo != null conditinally rendering the stack screen home or login//
  function HomeStack() {
    return (
      <NavigationContainer>
        {user ? <DrawerNavigator /> : <SignInScreen />}
      </NavigationContainer>
    );
  }
}

// Necessary to wrap the Home/Login stacks in order to have access to the Context //
// <userAuthContext.Provider value={{...}}> {children} </userAuthContext.Provider> //
export default function App() {
  return (
    <UserAuthContextProvider>
      {/* <UserDbContextProvider> */}
        <UserThemeContextProvider>
          <RootNavigator />
        </UserThemeContextProvider>
      {/* </UserDbContextProvider> */}
    </UserAuthContextProvider>
  );
}

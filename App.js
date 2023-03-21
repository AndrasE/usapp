import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';

function RootNavigator() {
  // await splash screen to finish the animation and firebase to get connected and establish //
  // if the user is authenticated and call homestack to conditinally render stacks//
  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 1700);

  if (splash === true) {
    return <SplashScreen />;
  } else {
    return <HomeStack />;
  }

  function HomeStack() {
    // if user exist ergo != null conditinally rendering the stack screen home or login//
    const {userDetails, checkUserInDb} = useUserAuth();
    // console.log("Accessing it by user ===>",userDetails);
    return (
      <NavigationContainer>
        {userDetails ? <DrawerNavigator /> : <SignInScreen />}
      </NavigationContainer>
    );
  }
}

// Necessary to wrap the Home/Login stacks in order to have access to the Context //
// <userAuthContext.Provider value={{...}}> {children} </userAuthContext.Provider> //
export default function App() {
  return (
    <UserDbContextProvider>
      <UserAuthContextProvider>
        <UserThemeContextProvider>
          <RootNavigator />
        </UserThemeContextProvider>
      </UserAuthContextProvider>
    </UserDbContextProvider>
  );
}

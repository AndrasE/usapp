import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {UserDbContextProvider} from './src/config/context/userDbContext';
import {useUserDb} from './src/config/context/userDbContext';
import {UserThemeContextProvider} from './src/config/context/userThemeContext';
import {SplashScreen, SignInScreen} from './src/navigations/ScreensImport';
import DrawerNavigator from './src/navigations/DrawerNavigator';
// import {useUserAuth} from './src/config/context/userAuthContext';

function RootNavigator() {
  // await splash screen to finish the animation and firebase to get connected and establish //
  // if the user is authenticated and call homestack to conditinally render stacks//
  const [splash, setSplash] = useState(true);
  // const {user} = useUserAuth();
  const {myData} = useUserDb();

  setTimeout(() => {
    setSplash(false);
  }, 1200);

  if (splash === true) {
    return <SplashScreen />;
  } else {
    if (myData) {
      console.log('====> User in database:',myData.name,"🧡 Welcome on board, you are one of US!🧡");
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

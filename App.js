import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import {useUserAuth} from './src/config/context/userAuthContext';
import {
  SplashScreen,
  SignInScreen,
  HomeScreen,
  AsdScreen,
  Asd2Screen,
  Asd3Screen,
} from './src/navigations/ScreensImport';
import CustomDrawer from './src/navigations/CustomDrawer';

const Drawer = createDrawerNavigator();

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
    const {user} = useUserAuth();

    return (
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Chats" component={HomeScreen} />
            <Drawer.Screen name="asd" component={AsdScreen} />
            <Drawer.Screen name="asd2" component={Asd2Screen} />
            <Drawer.Screen name="asd3" component={Asd3Screen} />
          </Drawer.Navigator>
        ) : (
          <SignInScreen />
        )}
      </NavigationContainer>
    );
  }
}

// Necessary to wrap the Home/Login stacks in order to have access to the Context //
// <userAuthContext.Provider value={{...}}> {children} </userAuthContext.Provider> //
export default function App() {
  return (
    <UserAuthContextProvider>
      <RootNavigator />
    </UserAuthContextProvider>
  );
}

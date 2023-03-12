import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import HomeScreen from './src/screens/home';
import {useUserAuth} from './src/config/context/userAuthContext';

const Stack = createNativeStackNavigator();
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
        <Stack.Navigator>
          {user ? (
            <Stack.Group>
              <Stack.Screen
                name={'home'}
                component={HomeScreen}
                options={{headerShown: false}}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name={'signIn'}
                component={SignInScreen}
                options={{headerShown: false}}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function DrawerNavStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserAuthContextProvider>
      <RootNavigator />
    </UserAuthContextProvider>
  );
}

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { UserAuthContextProvider } from './src/config/context/userAuthContext';

import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import HomeScreen from './src/screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }  

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
    <UserAuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'signIn'}
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'home'}
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserAuthContextProvider>
    </>
  );
};

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import HomeScreen from './src/screens/home';
import {useUserAuth} from './src/config/context/userAuthContext';


const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {user} = useUserAuth();


  
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen
            name={'home'}
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={'signIn'}
            component={SignInScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
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

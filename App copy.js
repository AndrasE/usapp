import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import SignInScreen from './src/screens/Signin';
import HomeScreen from './src/screens/Home';
// import {_signInWithGoogle} from '../config/firebase/GoogleSingIn.js';


const Stack = createNativeStackNavigator();


const App = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"splash"} component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name={"signIn"} component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name={"home"} component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
};


export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}

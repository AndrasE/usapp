import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import ChatScreen from './src/screens/chat';

const stack = createNativeStackNavigator();

const App = () => {
  return <>

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name={"splash"} component={SplashScreen} options={{ headerShown: false }} />
        <stack.Screen name={"signIn"} component={SignInScreen} options={{ headerShown: false }} />
        <stack.Screen name={"chat"} component={ChatScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  </>
};


export default App;

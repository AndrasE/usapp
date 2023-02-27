import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import SingInSuccesScreen from './src/screens/singinsuccess';

const stack = createNativeStackNavigator();

const App = () => {
  return <>

    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />

      <stack.Navigator>
        <stack.Screen name={"splash"} component={SplashScreen} options={{ headerShown: false }} />
        <stack.Screen name={"signIn"} component={SignInScreen} options={{ headerShown: false }} />
        <stack.Screen name={"singInSucces"} component={SingInSuccesScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  </>
};

export default App;

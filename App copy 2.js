import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserAuthContextProvider} from './src/config/context/userAuthContext';
import SplashScreen from './src/screens/Splash';
import SignInScreen from './src/screens/Signin';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
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

  );
};

export default App;

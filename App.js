import React, {useState} from 'react';
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

  //
  const [splash, setSplash] = useState(true);

  setTimeout(() => {
    setSplash(false);
  }, 1700);

  if (splash === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
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

export default function App() {
  return (
    <UserAuthContextProvider>
      <RootNavigator />
    </UserAuthContextProvider>
  );
}

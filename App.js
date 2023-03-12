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
  // await splash screen to finish the animation and firebase to get connected and establish //
  // if the user is authenticated and call homestack to conditinally render stacks//
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

export default function App() {
  return (
    <UserAuthContextProvider>
      <RootNavigator />
    </UserAuthContextProvider>
  );
}

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider } from './contexts/UserContext';
import { PainProvider } from './contexts/PainContext';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <PainProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </PainProvider>
    </UserProvider>
  );
}

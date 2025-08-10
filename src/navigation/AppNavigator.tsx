import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegistrationScreen';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  // In a real app, you'd check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen 
            name="Main" 
            component={MainNavigator} 
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen 
              name="Login" 
              // Pass setIsLoggedIn as a prop
              children={(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Register" 
              component={RegisterScreen} 
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/menu/HomeScreen';
import MenuScreen from '../screens/menu/MenuScreen'; 
import { Text, View } from 'react-native';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CartScreen from '../screens/cart/CartScreen';

export type MainTabParamList = {
  Home: undefined;
  Menu: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1B4332',
        tabBarInactiveTintColor: '#343A40',
        headerStyle: {
          backgroundColor: '#1B4332',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text>,
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} // Now using the real MenuScreen
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🍽️</Text>,
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🛒</Text>,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
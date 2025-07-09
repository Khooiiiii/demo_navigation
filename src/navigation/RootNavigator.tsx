import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/Feather';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#1976D2',
        drawerInactiveTintColor: '#333',
        drawerStyle: { backgroundColor: '#fff' },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          title: 'Trang chính',
          drawerIcon: ({ color, size }) => (
            <Icon name="grid" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          drawerIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { FavoriteProvider } from './src/components/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <RootNavigator />
      </NavigationContainer>
    </FavoriteProvider>
  );
}

export default App;

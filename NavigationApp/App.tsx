import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App;

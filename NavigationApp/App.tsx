import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/contexts/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  )
}


const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App;

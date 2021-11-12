import React from 'react'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView>
      {//<HolaMundoScreen/>
        //<CounterScreen/>
      }
      <BoxObjectModelScreen />
    </SafeAreaView>
  )
}
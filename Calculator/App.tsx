import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculatorScreens } from './src/screens/CalculatorScreens';
import { styles } from './src/themes/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculatorScreens />
    </SafeAreaView>
  )
}

export default App;
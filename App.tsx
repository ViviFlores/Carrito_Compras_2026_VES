import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  )
}

export default App;
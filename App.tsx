import React from 'react'
import GlobalState from './src/Context/GlobalState'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/Stacks/Home/HomeStack'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalState>
          <HomeStack />
        </GlobalState>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App
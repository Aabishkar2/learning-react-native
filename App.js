'use strict'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './src/containers/Home'
import Article from './src/containers/Article'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Article' component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

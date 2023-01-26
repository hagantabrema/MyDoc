import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { GetStarted, SignIn, SignUp, Splash } from './src/pages'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
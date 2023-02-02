import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { BottomNavigator } from './src/components'
import { GetStarted, SignIn, SignUp, Splash, UploadPhoto, Doctor, Hospitals, Messages, DoctorList, Chatting, UserProfile, DoctorProfile } from './src/pages'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen 
        name='Home'
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen 
        name='Messages'
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen 
        name='Hospitals'
        component={Hospitals}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  )
}

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
        <Stack.Screen
          name='UploadPhoto'
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MainApp'
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DoctorList'
          component={DoctorList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Chatting'
          component={Chatting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='UserProfile'
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DoctorProfile'
          component={DoctorProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
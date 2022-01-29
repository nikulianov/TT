import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {Chats} from '../screen/Chats'
import {Settings} from '../screen/Settings'
import {Contacts} from '../screen/Contacts'

import {getTabIcon, generateChatTitle} from './utils'
import Chat from '../screen/Chat'
import { RootStackParamList, TabParamList } from './types'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  const Tab = createBottomTabNavigator<TabParamList>()

  const ChatNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Chats"
        >
          <Stack.Screen name="Chats" component={Chats} options={{title: 'Чаты'}}/>
          <Stack.Screen name="Chat" component={Chat} options={({ route }) => {
            return generateChatTitle(route.params)
          }}/>
        </Stack.Navigator>
    )
  }

  const ContactNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Contacts"
        >
          <Stack.Screen name="Contacts" component={Contacts} options={{title: 'Контакты'}}/>
          <Stack.Screen name="Chat" component={Chat} options={({ route }) => {
            return generateChatTitle(route.params)
          }}/>
        </Stack.Navigator>
    )
  }

  return (
      <>
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {

                // You can return any component that you like here!
                return <Ionicons name={getTabIcon(route.name, focused)} size={size} color={color}/>
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              keyboardHidesTabBar: true,

            })}
        >
          <Tab.Screen
              name="Chats" component={ContactNavigation} options={{title: 'Контакты', headerShown: false}}/>
          <Tab.Screen name="Contacts" component={ChatNavigation} options={{title: 'Чаты', headerShown: false}}/>
          <Tab.Screen name="Settings" component={Settings} options={{title: 'Настройки'}}/>
        </Tab.Navigator>
      </>
  )
}

export default AppNavigation

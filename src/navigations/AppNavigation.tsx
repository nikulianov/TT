import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {Chats} from '../screen/Chats'
import {Settings} from '../screen/Settings'
import {Contacts} from '../screen/Contacts'

import {getTabIcon, generateChatTitle} from './utils'
import Chat from '../screen/Chat'
import { RootStackParamList, StackParamList, TabParamList } from './types'
import { headerOptions } from '../constans/headerOptions';
import { tabStyleOptions } from '../constans/tabBarOptions';
import Login from '../screen/Login';

const AppNavigation = () => {
  const RootNav = createNativeStackNavigator<RootStackParamList>()
  const Stack = createNativeStackNavigator<StackParamList>()
  const Tab = createBottomTabNavigator<TabParamList>()

  const ChatNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Chats"
          screenOptions={{
            ...headerOptions,
          }}
        >
          <Stack.Screen name="Chats" component={Chats} options={{title: 'Чаты'}}/>
        </Stack.Navigator>
    )
  }

  const ContactNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Contacts"
          screenOptions={{
            ...headerOptions,
          }}
        >
          <Stack.Screen name="Contacts" component={Contacts} options={{title: 'Контакты'}}/>
        </Stack.Navigator>
    )
  }
 // Тест
  const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {

                // You can return any component that you like here!
                return <Ionicons name={getTabIcon(route.name, focused)} size={size} color={color}/>
              },
              headerShown: false,
              keyboardHidesTabBar: true,
              ...tabStyleOptions,
            })}
        >
          <Tab.Screen
              name="Chats" component={ContactNavigation} options={{title: 'Контакты'}}/>
          <Tab.Screen name="Contacts" component={ChatNavigation} options={{title: 'Чаты'}}/>
          <Tab.Screen name="Settings" component={Settings} options={{title: 'Настройки'}}/>
        </Tab.Navigator>
    )
  }
  return (
      <RootNav.Navigator
          initialRouteName='Login'
          screenOptions={{
            ...headerOptions,
          }}
      >
        <RootNav.Screen name="Root" component={TabNavigation} options={{title: 'Контакты', headerShown: false}}/>
        <RootNav.Screen name="Chat" component={Chat} options={({route}) => ({
          ...generateChatTitle(route.params)
        })}/>
        <RootNav.Screen name="Login" component={Login} options={{title: 'Авторизация', headerShown: false}}/>
      </RootNav.Navigator>
  )
}

export default AppNavigation

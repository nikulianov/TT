import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {Chats} from '../screen/Chats'
import {Settings} from '../screen/Settings'
import {Contacts} from '../screen/Contacts'

import {getTabIcon} from './utils'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  return (
      <>
        {/*<Stack.Navigator>*/}
        {/*  <Stack.Screen*/}
        {/*      name="Home"*/}
        {/*      component={Contacts}*/}
        {/*      options={{title: 'Контакты'}}*/}
        {/*  />*/}
        {/*</Stack.Navigator>*/}

        <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {

                // You can return any component that you like here!
                return <Ionicons name={getTabIcon(route.name, focused)} size={size} color={color}/>
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen
              name="Home" component={Contacts} options={{title: 'Контакты'}}/>
          <Tab.Screen name="Contacts" component={Chats} options={{title: 'Чаты'}}/>
          <Tab.Screen name="Settings" component={Settings} options={{title: 'Настройки'}}/>
        </Tab.Navigator>
      </>
  )
}

export default AppNavigation

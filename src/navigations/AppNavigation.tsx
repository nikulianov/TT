import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Contacts from '../screen/Contacts'
import Home from '../screen/Home'
import Settings from '../screen/Settings'
import { getTabIcon } from './utils';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
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
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {

                // You can return any component that you like here!
                return <Ionicons name={getTabIcon(route.name, focused)} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen
              name="Home" component={Home} options={{title: 'Главная'}}/>
          <Tab.Screen name="Contacts" component={Contacts} options={{title: 'Контакты'}}/>
          <Tab.Screen name="Settings" component={Settings} options={{title: 'Настройки'}}/>
        </Tab.Navigator>
      </>
  )
}

export default AppNavigation

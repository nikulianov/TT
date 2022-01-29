import React, {FC} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'
import {request, PERMISSIONS} from 'react-native-permissions'

import AppNavigation from './src/navigations/AppNavigation'
import { StatusBar } from 'react-native'

const App: FC = () => {
  React.useEffect(()=>{
    Ionicons.loadFont().then()

    // Запрос прав для получения контактов
    request(PERMISSIONS.IOS.CONTACTS).then((result) => {
      console.log(result)
    });
  },[])
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#00000020" barStyle="light-content" />
        <AppNavigation/>
      </NavigationContainer>
  )
}


export default App

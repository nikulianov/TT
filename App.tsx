import React, {FC} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'
import {request, PERMISSIONS} from 'react-native-permissions'

import AppNavigation from './src/navigations/AppNavigation'

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
        <AppNavigation/>
      </NavigationContainer>
  )
}


export default App

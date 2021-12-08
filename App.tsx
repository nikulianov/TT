import React, {FC} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'

import AppNavigation from './src/navigations/AppNavigation'

const App: FC = () => {
  React.useEffect(()=>{
    Ionicons.loadFont().then()
  },[])
  return (
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
  )
}


export default App

import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'

import { THEME } from '../theme'

const MainLayout:FC = ({children}) => {
  return (
      <View style={style.wrapper}>
        {children}
      </View>
  )
}

const style = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: THEME.bgColor,
  }
})

export default MainLayout

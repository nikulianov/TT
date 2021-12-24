import React, {FC} from 'react'
import {View, Text} from 'react-native'
import MainLayout from '../../HOC/MainLayout'

export const Settings: FC = () => {
  return (
      <MainLayout>
        <View>
          <Text>Настройки</Text>
        </View>
      </MainLayout>
  )
}

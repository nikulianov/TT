import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {style} from '../../style'
import {firstSymbolName} from '../../../../utils/main'
import { MessagePropsType } from './types'

export const Message: FC<MessagePropsType> = ({item}) => {
  const {name, message, time, my} = item

  if(my){
    return (
        <View style={{...style.messageContent,...style.rightBlock}}>
          <View style={style.messageBlock}>
            <Text style={style.message}>{message}</Text>
            <Text style={style.time}>{time}</Text>
          </View>
          <View style={style.avatar}>
            <Text style={style.avatarSymbol}>{firstSymbolName(name)}</Text>
          </View>
        </View>
    )
  }
  return (
      <View style={style.messageContent}>
        <View style={style.avatar}>
          <Text style={style.avatarSymbol}>{firstSymbolName(name)}</Text>
        </View>
        <View style={style.messageBlock}>
          <Text style={style.message}>{message}</Text>
          <Text style={style.time}>{time}</Text>
        </View>
      </View>
  )
}


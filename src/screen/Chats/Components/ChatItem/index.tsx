import React, {FC} from 'react'
import {style} from '../../style'
import {Text, TouchableOpacity, View} from 'react-native'
import {firstSymbolName, getDateLastMessage} from '../../../../utils/main'
import {ContactType} from '../../types'

interface ItemPropsTypes {
  item: ContactType,
  openChat: (contact: any) => void
}

export const ChatItem: FC<ItemPropsTypes> = ({item, openChat}) => {
  const {name, message, time} = item
  return (
      <TouchableOpacity onPress={()=>openChat(item)}>
        <View style={style.chatWrapper}>
          <View style={style.chatBlock}>
            <View style={style.avatar}>
              <Text style={style.avatarSymbol}>{firstSymbolName(name)}</Text>
            </View>
            <View style={style.chatInfo}>
              <View style={style.nameBlock}>
                <View>
                  <Text style={style.nameText}>{name}</Text>
                </View>
                <View>
                  <Text style={style.timeText}>{getDateLastMessage(time)}</Text>
                </View>
              </View>
              <View>
                <Text style={style.message}>
                  {message}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  )
}


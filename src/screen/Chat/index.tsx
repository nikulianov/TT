import React, {FC} from 'react'
import MainLayout from '../../HOC/MainLayout'
import {View, Text} from 'react-native'

import {style} from './style'
import {firstSymbolName} from '../../utils/main'
import {useRoute} from '@react-navigation/native'
import { RoutePropsTypes } from '../../navigations/types'

interface DataType {
  id: string;
  message: string;
  name: string;
  img: string;
  time: string;
  my: boolean;
}

interface MessagePropsType {
  item: DataType
}

const DATA: DataType[] = [
  {
    id: 'gfdsgwgdsg',
    message: 'Привет как дела? что делаем в субботу? Мне нужно срочно знать ответ',
    name: 'Анжелика',
    img: 'ggg',
    time: '14:30',
    my: false,
  },
  {
    id: 'gfdsgwsgdsg',
    message: 'Я просто хочу сразу все уточнить',
    name: 'Анжелика',
    img: 'ggg',
    time: '14:30',
    my: false,
  },
  {
    id: 'gfdsgwggdsg',
    message: 'Ты тут?',
    name: 'Анжелика',
    img: 'ggg',
    time: '14:30',
    my: false,
  },
  {
    id: 'gfdsgwagdsg',
    message: 'Да, конечно',
    name: 'Николай',
    img: 'ggg',
    time: '14:30',
    my: true,
  }
]

const Message: FC<MessagePropsType> = ({item}) => {
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

const Chat: FC = () => {
  // const param = useRoute<RoutePropsTypes>().params

  return (
      <MainLayout>
        <View style={style.wrapper}>
          {DATA.map((item) => <Message key={item.id} item={item}/>)}
        </View>
      </MainLayout>
  )
}

export default Chat

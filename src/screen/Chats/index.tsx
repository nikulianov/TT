import React, {FC, useCallback} from 'react'
import {FlatList, ListRenderItem} from 'react-native'
import MainLayout from '../../HOC/MainLayout'
import {ContactType} from './types'
import {ChatItem} from './Components/ChatItem'

const data: ContactType[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5533abb28ba',
    name: 'Анжелика',
    message: 'Привет',
    time: new Date(),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5533ab8b28ba',
    name: 'Ваня',
    message: 'Привет',
    time: new Date('12/23/2021'),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53533abb28ba',
    name: 'Роман',
    message: 'Привет',
    time: new Date('12/22/2021'),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad55533abb28ba',
    name: 'Степан',
    message: 'Привет',
    time: new Date('12/22/2021'),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5533a1bb28ba',
    name: 'Илья',
    message: 'Привет',
    time: new Date('12/21/2021'),
    img: '',
  },
]

export const Chats: FC<any> = ({navigation}) => {

  const openChat = useCallback((contact) =>{
    navigation.navigate('Chat', {contact})
  },[navigation])

  const renderChatItem: ListRenderItem<ContactType> = ({item}) => {
    return (
        <ChatItem item={item} openChat={openChat}/>
    )
  }

  return (
      <MainLayout>
        <FlatList
            data={data}
            renderItem={renderChatItem}
            keyExtractor={item => item.id}
        />
      </MainLayout>
  )
}


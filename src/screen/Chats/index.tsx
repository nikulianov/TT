import React, {FC} from 'react'
import {View, Text, FlatList, ListRenderItem} from 'react-native'
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
    name: 'Анжелика',
    message: 'Привет',
    time: new Date(),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53533abb28ba',
    name: 'Анжелика',
    message: 'Привет',
    time: new Date(),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad55533abb28ba',
    name: 'Анжелика',
    message: 'Привет',
    time: new Date(),
    img: '',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5533a1bb28ba',
    name: 'Анжелика',
    message: 'Привет',
    time: new Date(),
    img: '',
  },
]

export const Chats: FC = () => {

  const renderChatItem: ListRenderItem<ContactType> = ({item}) => {
    return (
        <ChatItem item={item}/>
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


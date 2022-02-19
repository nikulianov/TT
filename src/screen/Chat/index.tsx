import React, {FC, useState, useCallback, useEffect} from 'react'
import {GiftedChat, IMessage} from 'react-native-gifted-chat'
import {ImageBackground} from 'react-native'
// import 'dayjs/locale/ru'
// import {style} from './style'

const image = { uri: 'https://krot.info/uploads/posts/2021-01/1610216154_4-p-fon-chata-whatsapp-5.png' }
const Chat: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Mr.Bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((mess = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, mess))
  }, [])
  return (
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <GiftedChat
            messages={messages}
            placeholder="Введите сообщение"
            onSend={mess => onSend(mess)}
            user={{
              _id: 1,
            }}
        />
      </ImageBackground>
  )
}

export default Chat

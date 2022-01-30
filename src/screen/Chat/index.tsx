import React, {FC, useState, useCallback, useEffect} from 'react'
import {GiftedChat, IMessage} from 'react-native-gifted-chat'
// import 'dayjs/locale/ru'
import {style} from './style'


// const DATA: DataType[] = [
//   {
//     id: 'gfdsgwgdsg',
//     message: 'Привет как дела? что делаем в субботу? Мне нужно срочно знать ответ',
//     name: 'Анжелика',
//     img: 'ggg',
//     time: '14:30',
//     my: false,
//   },
//   {
//     id: 'gfdsgwsgdsg',
//     message: 'Я просто хочу сразу все уточнить',
//     name: 'Анжелика',
//     img: 'ggg',
//     time: '14:30',
//     my: false,
//   },
//   {
//     id: 'gfdsgwggdsg',
//     message: 'Ты тут?',
//     name: 'Анжелика',
//     img: 'ggg',
//     time: '14:30',
//     my: false,
//   },
//   {
//     id: 'gfdsgwagdsg',
//     message: 'Да, конечно',
//     name: 'Николай',
//     img: 'ggg',
//     time: '14:30',
//     my: true,
//   },
// ]

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
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
      <GiftedChat
          messages={messages}
          placeholder="Введите сообщение"
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
      />
  )
}

export default Chat

import React, {FC, useState} from 'react'
import {View, Keyboard, TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {style} from './style'

export const Input: FC = () => {
  const [text, setText] = useState('')

  return (
        <View style={style.inputWrapper}>
          <View style={style.fileContent}>
            <Ionicons name="camera-outline" size={28} color={'#a8a8a8'}/>
          </View>
          <View style={style.inputContent}>
            <TextInput
                style={style.input}
                onChangeText={setText}
                placeholder="Сообщение..."
                placeholderTextColor="#a8a8a8"
                onSubmitEditing={Keyboard.dismiss}
                value={text}
            />
          </View>
          {!!text.trim() ?
              <View style={style.voiceContent}>
                <Ionicons name="arrow-up-circle" size={27} color="#2199ff"/>
              </View>
              :
              <View style={style.voiceContent}>
                <Ionicons name="mic-outline" size={26} color={'#a8a8a8'}/>
              </View>
          }
        </View>
  )
}


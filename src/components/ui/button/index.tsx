import React, {FC} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface PropButton {
  title?: string,
  onPress: ()=> void,
  style: any
}

const ButtonUi:FC<PropButton> = ({title = 'Submit', onPress, style = {}}) => {
  return (
      <TouchableOpacity onPress={onPress} onLongPress={onPress}>
        <View style={{...styleBtn.wrapper, ...style}}>
          <Text style={styleBtn.text}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styleBtn = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 10,
    borderRadius: 2,
    backgroundColor: '#356EE0',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 5.27,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff'
  }
})

export default ButtonUi

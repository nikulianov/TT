import {StyleSheet} from 'react-native'
import {THEME} from '../../theme'

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 10,
  },
  messageContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rightBlock:{
    justifyContent: 'flex-end',
  },
  avatar:{
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
  avatarSymbol:{
    fontSize: 12,
    fontWeight: 'bold',
  },
  messageBlock: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    maxWidth: '90%',
  },
  time:{
    fontSize: 10,
    opacity: 0.3,
    alignSelf: 'flex-end'
  },
  message: {

  }

})

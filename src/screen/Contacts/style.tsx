import {StyleSheet} from 'react-native'
import { THEME } from '../../theme'

export const style = StyleSheet.create({
  contactWrapper:{},
  contactBlock:{
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar:{
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarSymbol:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,

  },
  nameText: {
    fontSize: 15,
    fontWeight: '400'
  },
  timeText:{
    fontSize: 10
  },
  message: {
    fontSize: 12,
    color: THEME.nameMessageColor,
    opacity: 0.8
  }
})

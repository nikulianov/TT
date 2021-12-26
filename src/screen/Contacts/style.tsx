import {StyleSheet} from 'react-native'
import {THEME} from '../../theme'

export const style = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
  },
  contactBlock: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingVertical: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarSymbol: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatarImg:{
    width: 35,
    height: 35,
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  onlineInfo: {
    fontSize: 12,
    color: THEME.nameMessageColor,
    opacity: 0.8
  }
})

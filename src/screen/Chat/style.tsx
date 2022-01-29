import {Dimensions, StyleSheet} from 'react-native'
// const {height } = Dimensions.get('window')
export const style = StyleSheet.create({
  wrapper: {
    height: '100%',
    paddingTop: 10,
    position: 'relative',
  },
  messageWrapper:{
    flex: 1,
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

  },
})

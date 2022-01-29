import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
  inputWrapper:{
    backgroundColor: '#312f2f',
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  fileContent:{
    width: 40,
    alignItems: 'center',
  },
  voiceContent:{
    width: 40,
    alignItems: 'center',
  },
  inputContent:{
    flex: 1,
    height: 25,
    backgroundColor: '#000000',
    borderRadius: 9,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input:{
    color: '#fff',
    // height: 23,
    width: '100%',
    height: '100%',
  },
  addMessageIcon:{
    backgroundColor: '#2199ff',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 50,
    marginHorizontal: 6
  },
})

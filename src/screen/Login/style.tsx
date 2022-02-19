import { StyleSheet} from 'react-native'
import { THEME } from '../../theme'
// const {height } = Dimensions.get('window')
export const style = StyleSheet.create({
  wrapper:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  formContent:{
    backgroundColor: '#fff',
    width: 280,
    borderRadius: 10,
    padding: 15,
  },
  form:{
  },
  title:{
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 8,
    marginTop: 10,
  },
  btn:{
    marginTop: 10
  }

})

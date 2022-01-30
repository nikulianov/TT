import {joinName} from '../utils/main'
import {headerOptions} from './options'
import { ContactsPhoneType } from '../globalTypes/contactsPhoneType';

interface GenerateChatTitlePropsType {
  contact: ContactsPhoneType | any
}

export const getTabIcon = (name: string, focused: boolean) => {
  if (name === 'Home') {
    return focused ? 'home' : 'home-outline';
  } else if (name === 'Settings') {
    return focused ? 'ios-settings' : 'ios-settings-outline';
  }
  return focused ? 'people-sharp' : 'people-outline';
}

export const generateChatTitle = (params: GenerateChatTitlePropsType) => {
  const {contact} = params
  if(!contact){
    return headerOptions('Чат')
  }
  let fullName
  if(!contact.givenName && !contact.familyName){
    fullName = contact.name
  } else{
    fullName =  joinName(contact.givenName, contact.familyName)
  }
  return headerOptions(fullName)
}

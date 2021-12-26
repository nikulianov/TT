import {RouteProp} from '@react-navigation/native'

import {ContactsPhoneType} from '../globalTypes/contactsPhoneType'


// types of route props navigation
type ChatScreenPropsRoute = {
  contact: ContactsPhoneType
}

export type RootStackParamList = {
  Chats: undefined;
  Chat: ChatScreenPropsRoute
  Contacts: undefined;
  Settings: undefined;
};

export type TabParamList = {
  Contacts: undefined;
  Settings: undefined;
  Chats: undefined;
};

/**
 * Types for screen route props
 */
// Chat route
type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>

export type RoutePropsTypes = ChatScreenRouteProp

/**
 * Types for screen navigation props
 */




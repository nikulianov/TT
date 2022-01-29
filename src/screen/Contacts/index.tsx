import React, {FC, useEffect, useState, useCallback} from 'react'
import {View, FlatList, TextInput} from 'react-native'
import ContactsMobile from 'react-native-contacts'
import {useNavigation} from '@react-navigation/native'
import {style} from './style'
import MainLayout from '../../HOC/MainLayout'
import {ContactItem} from './ContactItem'
import {ContactsPhoneType} from '../../globalTypes/contactsPhoneType'

export const Contacts: FC = () => {

  const navigation = useNavigation<any>()

  const [contacts, setContacts] = useState<ContactsPhoneType[]>([])
  useEffect(() => {
    ContactsMobile.getAll().then((contList) => {
      setContacts(contList)
    })
  }, [])
  const openChat = useCallback((contact) => {
    navigation.push('Chat', {contact})
  }, [navigation])

  const renderContactItem = useCallback(({item}) => {
    return <ContactItem item={item} openChat={openChat}/>
  }, [contacts])

  return (
      <MainLayout>
        <View style={style.wrapper}>
          <FlatList
              data={contacts}
              renderItem={renderContactItem}
              keyExtractor={item => item.recordID}
          />
        </View>
      </MainLayout>
  )
}


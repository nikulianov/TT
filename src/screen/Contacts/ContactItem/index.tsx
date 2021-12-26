import React, {FC, useMemo, memo} from 'react'
import {Text, TouchableOpacity, View, Image} from 'react-native'
import {style} from '../style'
import {firstSymbolName, joinName} from '../../../utils/main'
import { ContactsPhoneType } from '../../../globalTypes/contactsPhoneType'

interface ContactItemPropsType {
  item: ContactsPhoneType;
  openChat: (contact: ContactsPhoneType) => void
}

interface RenderAvatarPropsType {
  hasThumbnail: boolean;
  thumbnailPath: string;
  givenName: string;
}

const RenderAvatar: FC<RenderAvatarPropsType> = memo(({hasThumbnail, thumbnailPath, givenName}) => {
  if (hasThumbnail && thumbnailPath) {
    return (
        <Image
            style={style.avatar}
            source={{
              uri: thumbnailPath,
            }}
        />
    )
  }

  return (
      <View style={style.avatar}>
        <Text style={style.avatarSymbol}>{firstSymbolName(givenName)}</Text>
      </View>
  )
})

export const ContactItem: FC<ContactItemPropsType> = ({item, openChat}) => {
  const fullName = useMemo(() => joinName(item.givenName, item.familyName), [item])
  return (
      <TouchableOpacity onPress={()=> openChat(item)}>
        <View style={style.contactBlock}>
          <RenderAvatar hasThumbnail={item.hasThumbnail}
                        thumbnailPath={item.thumbnailPath}
                        givenName={item.givenName}/>
          <View style={style.contactInfo}>
            <View>
              <Text style={style.name}>{fullName}</Text>
            </View>
            <View>
              <Text style={style.onlineInfo}>
                был(а) 2 минуты назад
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  )
}

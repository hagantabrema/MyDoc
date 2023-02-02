import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AccountCircle, ChevronRight, Help, Language, NullPhoto, Rate } from '../../assets'
import { colors, fonts } from '../../utils'

const Item = ({onPress, name, desc, icon}) => {

  const Icon = () => {
    if (icon === 'edit-profile') {
      return <AccountCircle />
    }
    if (icon === 'language') {
      return <Language />
    } 
    if (icon === 'rate') {
      return <Rate />
    }
    if (icon === 'help') {
      return <Help />
    }

    return <AccountCircle />
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.profile}>
          {icon ? <Icon /> : <Image source={NullPhoto} style={styles.avatar}/>}
          <View style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
      </View>
      <ChevronRight />
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    height: 46,
    width: 46,
    //marginRight: 12
  },

  text: {
    marginLeft: 16
  },

  name: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 4
  },

  desc: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    fontSize: 12
  }
})
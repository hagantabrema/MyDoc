import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const ChatItem = () => {
  return (
    <View style={styles.container}>
      <Image source={NullPhoto} style={styles.avatar}/>
      <View style={styles.text}>
        <Text style={styles.name}>Eleanor Alexandra</Text>
        <Text style={styles.message}>Baik ibu, terima kasih banyak atas wakt...</Text>
      </View>
    </View>
  )
}

export default ChatItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },

  avatar: {
    height: 46,
    width: 46,
    marginRight: 12
  },

  name: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 4
  },

  message: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    fontSize: 12
  }
})
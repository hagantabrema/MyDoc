import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const Other = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBubble}>
        <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
      </View>
      <Text style={styles.time}>9.20 AM</Text>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 20
  },
  
  messageBubble: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    maxWidth: '70%',
  },

  message: {
    color: 'white',
    fontFamily: fonts.primary.normal,
    fontSize: 14
  },

  time: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    marginTop: 8
  }
})
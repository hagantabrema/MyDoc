import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBubble}>
        <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
      </View>
      <Text style={styles.time}>9.20 AM</Text>
    </View>
  )
}

export default IsMe

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20
  },
  
  messageBubble: {
    backgroundColor: colors.cardLight,
    padding: 12,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
  },

  message: {
    color: colors.text.primary,
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
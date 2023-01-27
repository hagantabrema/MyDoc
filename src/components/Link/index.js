import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const Link = ({text, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        fontFamily: fonts.primary.normal,
        textAlign: align
    })
})
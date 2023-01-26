import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'

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
        color: '#7D8797',
        textDecorationLine: 'underline',
        fontFamily: fonts.primary.normal,
        textAlign: align
    })
})
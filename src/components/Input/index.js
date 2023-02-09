import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'

const Input = ({label, value, onChangeText, secureTextEntry}) => {

  const [border, setBorder] = useState(colors.border)

  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input(border)}
          onFocus={() => setBorder(colors.tertiary)}
          onBlur={() => setBorder(colors.border)}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        >
        </TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        fontSize: 16,
        marginBottom: 6
    },

    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        padding: 12,
        color: 'black'
    })
})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'

const Input = ({label}) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input}></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.primary.normal,
        color: '#7D8797',
        fontSize: 16,
        marginBottom: 6
    },

    input: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 10,
        padding: 12,
        color: 'black'
    }
})
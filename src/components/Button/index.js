import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/fonts'

const Button = ({type, title}) => {
  return (
    <TouchableOpacity style={styles.container(type)}>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === "secondary" ? 'white' : '#0BCAD4',
        paddingVertical: 10,
        borderRadius: 10
    }),
    
    text: (type) => ({
        fontFamily: fonts.primary[600],
        fontSize: 18,
        textAlign: 'center',
        color: type === "secondary" ? '#112340' : 'white'
    })
})
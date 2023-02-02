import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils'
import IconOnly from './IconOnly'
import SendButton from './SendButton'

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'send-button') {
    return <SendButton disable={disable} />
  }
  
  if (type === 'icon') {
    return <IconOnly onPress={onPress} icon={icon} />
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === "secondary" ? 'white' : colors.primary,
        paddingVertical: 10,
        borderRadius: 10
    }),
    
    text: (type) => ({
        fontFamily: fonts.primary[600],
        fontSize: 18,
        textAlign: 'center',
        color: type === "secondary" ? colors.secondary : 'white'
    })
})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import Button from '../Button'

const MessageInput = ({disable}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Tulis pesan untuk Eleanor'
        placeholderTextColor='#B1B7C2'
      />
      <Button type='send-button' disable={disable}/>
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  
  textInput: {
    backgroundColor: colors.messageInput,
    color: 'black',
    padding: 14,
    borderRadius: 10,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    flex: 1,
    marginRight: 16,
    maxHeight: 45
  }
})
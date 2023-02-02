import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SendDark, SendLight } from '../../assets'
import { colors } from '../../utils'

const SendButton = ({onPress, disable}) => {
  return (
    <TouchableOpacity onPress={onPress} disable={disable} style={styles.container(disable)}>
        {disable && <SendDark />}
        {!disable && <SendLight />}
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.messageInput : colors.tertiary,
        paddingHorizontal: 8,
        paddingBottom: 8,
        paddingTop: 3,
        borderRadius: 10,
        width: 45
    })
})
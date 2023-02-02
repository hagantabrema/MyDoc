import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, MessageInput, MessageItem } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
  return (
    <View style={styles.container}>
        <Header title="Eleanor Alexandra" type="profile"/>
        <Text style={styles.date}>Kamis, 21 Juli 2022</Text>
        <View style={styles.chat}>
            <View>
              <MessageItem isMe />
              <MessageItem />
              <MessageItem isMe />
            </View>
            <MessageInput />
        </View>
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chat: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between'
  },
  date: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 20
  }
})
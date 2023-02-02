import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import IsMe from './IsMe'
import Other from './Other'

const MessageItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />
  } else {
    return <Other />
  }
}

export default MessageItem
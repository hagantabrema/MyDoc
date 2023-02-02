import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../assets'
import { colors, fonts } from '../../utils'
import Gap from '../Gap'
import Button from '../Button'
import Profile from './Profile'

const Header = ({title, onPress, type}) => {
  if (type === 'profile') {
    return <Profile />
  }

  return (
    <View style={styles.container(type)}>
        <Button type="icon" icon={type === 'background' ? "back-light" : "back-dark"} onPress={onPress} />
        <Text style={styles.title(type)}>{title}</Text>
        <Gap width={24} />
    </View>
  )

}

export default Header

const styles = StyleSheet.create({
    container: (type) => ({
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: type === 'background' ? colors.secondary : 'white',
        borderBottomLeftRadius: type === 'background' ? 20 : 0,
        borderBottomRightRadius: type === 'background' ? 20 : 0

    }),
    title: (type) => ({
        color: type === 'background' ? 'white' : colors.text.primary,
        fontFamily: fonts.primary[600],
        fontSize: 20,
    })
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../assets'
import { colors, fonts } from '../../utils'
import Gap from '../Gap'
import Button from '../Button'

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
        <Button type="icon" icon="back-dark" onPress={onPress} />
        <Text style={styles.title}>{title}</Text>
        <Gap width={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        fontSize: 20,
    }
})
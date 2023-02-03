import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import { fonts, colors } from '../../utils'
import Gap from '../Gap'
import { NullPhoto } from '../../assets'

const Profile = ({onPress}) => {
  return (
    <View style={styles.container}>
        <Button type="icon" icon="back-light" onPress={onPress} />
        <View style={styles.text}>
            <Text style={styles.name}>Eleanor Alexandra</Text>
            <Text style={styles.job}>Dokter Umum</Text>
        </View>
        <Image source={NullPhoto} style={styles.avatar} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    name: {
        color: 'white',
        fontFamily: fonts.primary[600],
        fontSize: 20,
    },

    job: {
        color: colors.text.secondary,
        fontFamily: fonts.primary.normal,
        fontSize: 14
    },

    avatar: {
        height: 46,
        width: 46
    },

    text: {
        alignItems: 'center'
    }
})
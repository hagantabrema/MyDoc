import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HospitalPicture } from '../../assets'
import { colors, fonts } from '../../utils'

const HospitalItem = () => {
  return (
    <View style={styles.container}>
        <Image source={HospitalPicture} style={styles.picture} />
        <View style={styles.text}>
            <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
            <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
        </View>
    </View>
  )
}

export default HospitalItem

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },

    picture: {
        width: 80,
        height: 60,
        marginRight: 16
    },

    name: {
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        fontSize: 16,
        marginBottom: 6,
        //maxWidth: 151
    },

    address: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[300],
        fontSize: 12
    }
})
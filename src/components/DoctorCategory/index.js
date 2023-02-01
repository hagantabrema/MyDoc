import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DokterUmum } from '../../assets'
import { colors, fonts } from '../../utils'
import Gap from '../Gap'

const DoctorCategory = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <DokterUmum />
        <Gap height={30} />
        <Text style={styles.text()}>Saya butuh</Text>
        <Text style={styles.text("category")}>dokter umum</Text>
    </TouchableOpacity>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        width: 100,
        height: 130,
        borderRadius: 10,
        padding: 12,
        marginRight: 10
    },

    text: (option) => ({
        fontFamily: option === "category" ? fonts.primary[600] : fonts.primary[300],
        fontSize: 12,
        color: colors.text.primary
    })
})
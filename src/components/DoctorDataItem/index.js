import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const DoctorDataItem = ({title, data}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
    </View>
  )
}

export default DoctorDataItem

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },

    title: {
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
    },

    data: {
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
        marginTop: 4
    }
})
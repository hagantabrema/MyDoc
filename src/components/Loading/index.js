import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.loadingBackground,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    text: {
        fontFamily: fonts.primary[600],
        color: colors.primary,
        marginTop: 10
    }
})
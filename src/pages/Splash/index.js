import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../assets/illustrations'
import { fonts } from '../../utils/fonts'

const Splash = () => {
  return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>My Doctor</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: '#112340',
        marginTop: 20
    }
})
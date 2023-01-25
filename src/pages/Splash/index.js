import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../assets/illustrations'

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
        fontWeight: '600',
        color: '#112340',
        marginTop: 20
    }
})
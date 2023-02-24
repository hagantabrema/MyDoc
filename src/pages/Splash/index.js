import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'
import { colors, fonts } from '../../utils'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.replace('MainApp')
        } else {
          navigation.replace('GetStarted')
        }
      })
    }, 1500)
  }, [navigation])

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
        color: colors.text.primary,
        marginTop: 20
    }
})
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Logo, BGGetStarted } from '../../assets/illustrations'
import Button from '../../components/Button'
import Gap from '../../components/Gap'
import { fonts } from '../../utils/fonts'

const GetStarted = () => {
  return (
    <ImageBackground source={BGGetStarted} style={styles.container}>
        <View>
            <Logo />
            <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel.</Text>
        </View>
        <View>
            <Button title="Get Started"/>
            <Gap height={16}/>
            <Button title="Sign In" type="secondary"/>
        </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'space-between',
    },

    text: {
        fontFamily: fonts.primary[600],
        fontSize: 28,
        marginTop: 91,
        color: 'white'
    }
})
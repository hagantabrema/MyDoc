import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Logo, BGGetStarted } from '../../assets/illustrations'
import { Button, Gap } from '../../components'
import { fonts } from '../../utils'

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BGGetStarted} style={styles.container}>
        <View>
            <Logo />
            <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel.</Text>
        </View>
        <View>
            <Button title="Get Started" onPress={() => navigation.navigate('SignUp')} />
            <Gap height={16}/>
            <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('SignIn')}/>
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
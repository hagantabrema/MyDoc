import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { fonts } from '../../utils'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In"/>
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },

  text: {
    color: '#112340',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    maxWidth: 153
  }
})
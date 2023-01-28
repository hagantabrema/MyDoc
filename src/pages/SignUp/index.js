import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Input } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')}/>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  }
})
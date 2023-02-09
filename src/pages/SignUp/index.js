import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input, Loading } from '../../components'
import useForm from '../../utils/useForm'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { showMessage, hideMessage } from "react-native-flash-message"
import { colors } from '../../utils'

const SignUp = ({navigation}) => {

  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const Submit = () => {
    setLoading(true)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false)
        setForm('reset')
        console.log('success:', user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false)
        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.error,
          color: 'white'
        });
        console.log('err:', errorCode, errorMessage)
      });
      
    //navigation.navigate('UploadPhoto')
    //console.log(form)
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Input
          label="Nama Lengkap"
          value={form.fullName}
          onChangeText={(value) => setForm('fullName', value)}
        />
        <Gap height={24} />
        <Input
          label="Pekerjaan"
          value={form.job}
          onChangeText={(value) => setForm('job', value)}
        />
        <Gap height={24} />
        <Input 
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input 
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={40} />
        <Button title="Continue" onPress={Submit} />
      </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  content: {
    padding: 40,
    paddingTop: 0,
  }
})
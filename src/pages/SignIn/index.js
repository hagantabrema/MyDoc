import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { colors, fonts, storeData } from '../../utils'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { showMessage, hideMessage } from "react-native-flash-message"
import useForm from '../../utils/useForm'
import { getDatabase, ref, child, get } from "firebase/database"

const SignIn = ({navigation}) => {

  const [form, setForm] = useForm({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const onSignIn = () => {
    setLoading(true)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setLoading(false)
      setForm('reset')

      const dbRef = ref(getDatabase())
      get(child(dbRef, `users/${user.uid}`))
      .then(signedUser => {
        console.log('success get signed user', signedUser.val())
        if (signedUser.val()) {
          storeData('users', signedUser.val())
        }
      })
      .catch(err => {
        console.log('error get user:', err)
      })

      showMessage({
        message: 'Login berhasil',
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white,
      })
      console.log('signed in user:', user)
      navigation.replace('MainApp')
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
        })
      })
  }

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Logo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
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
      <Gap height={10} />
      <Link text="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={onSignIn} />
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" onPress={() => navigation.navigate('SignUp')}/>
    </ScrollView>
    {loading && <Loading />}
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },

  text: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    maxWidth: 153
  }
})
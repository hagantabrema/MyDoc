import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Input, Profile } from '../../components'

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
            <Profile />
            <Gap height={26} />
            <View style={styles.input}>
                <Input label="Nama Lengkap" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email Address" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Save Profile" />
            </View>
        </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    content: {
        flex: 1,
        backgroundColor: 'white'
    },

    input: {
        padding: 40,
        paddingTop: 0
    },
})
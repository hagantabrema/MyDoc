import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, DoctorDataItem, Header, Profile } from '../../components'

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
            <Profile name="Eleanor Alexandra" job="Dokter Umum" />
            <View>
                <DoctorDataItem title="Alumnus" data="Universitas Indonesia" />
                <DoctorDataItem title="Tempat Praktik" data="Rumah Sakit Umum, Bandung" />
                <DoctorDataItem title="No. STR" data="11112345673867386" />
            </View>
            <View style={styles.button}>
                <Button title="Start Consultation" />
            </View>
        </View>
    </View>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    content: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    
    button: {
        paddingHorizontal: 40
    }
})
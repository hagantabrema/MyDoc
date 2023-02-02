import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { DoctorItem } from '../../components'

const DoctorList = ({navigation}) => {
  return (
    <View>
        <Header title="Pilih Dokter Umum" type="background" onPress={() => navigation.goBack()} />
        <DoctorItem onPress={() => navigation.navigate('Chatting')} />
        <DoctorItem />
        <DoctorItem />
        <DoctorItem />
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({})
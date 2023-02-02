import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { Item } from '../../components'

const DoctorList = ({navigation}) => {
  return (
    <View>
        <Header title="Pilih Dokter Umum" type="background" onPress={() => navigation.goBack()} />
        <Item name="Eleanor Alexandra" desc="Wanita" onPress={() => navigation.navigate('Chatting')} />
        <Item name="Eleanor Alexandra" desc="Wanita" />
        <Item name="Eleanor Alexandra" desc="Wanita" />
        <Item name="Eleanor Alexandra" desc="Wanita" />
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({})
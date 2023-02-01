import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { DoctorItem } from '../../components'

const DoctorList = () => {
  return (
    <View>
        <Header title="Pilih Dokter Umum" type="background" />
        <DoctorItem />
        <DoctorItem />
        <DoctorItem />
        <DoctorItem />
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({})
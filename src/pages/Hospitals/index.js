import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { HospitalBackground } from '../../assets'
import { HospitalItem } from '../../components'

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={HospitalBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subtitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.wrapper}>
        <HospitalItem />
        <HospitalItem />
        <HospitalItem />
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1
  },

  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -18,
    paddingTop: 14
  },

  background: {
    width: '100%',
    height: 240
  },

  title: {
    fontFamily: fonts.primary[600],
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 6
  },

  subtitle: {
    fontFamily: fonts.primary[300],
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  }
})
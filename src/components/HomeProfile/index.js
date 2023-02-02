import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { NullPhoto } from '../../assets'

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={NullPhoto} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>Haganta Bangun</Text>
        <Text style={styles.job}>Software Engineer</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    height: 46,
    width: 46,
    marginRight: 12
  },
  
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16
  },

  job: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 12
  }
})
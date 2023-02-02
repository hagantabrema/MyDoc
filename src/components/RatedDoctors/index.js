import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { NullPhoto, Star } from '../../assets'

const RatedDoctors = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.profile}>
        <Image source={NullPhoto} style={styles.avatar}/>
        <View>
          <Text style={styles.name}>Alexa Rachel</Text>
          <Text style={styles.job}>Pediatrician</Text>
        </View>
      </View>
      <View style={styles.stars}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </TouchableOpacity>
  )
}

export default RatedDoctors

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stars: {
    flexDirection: 'row',
  },

  avatar: {
    height: 50,
    width: 50,
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
    fontSize: 12,
    marginTop: 2
  }
})
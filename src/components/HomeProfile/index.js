import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData } from '../../utils'
import { NullPhoto } from '../../assets'

const HomeProfile = ({onPress}) => {

  useEffect(() => {
    getData('users')
    .then(res => {
      console.log('user data:', res)
      const data = res
      data.photo = {uri: res.photo}
      setProfile(res)
    })
  }, [])

  const [profile, setProfile] = useState({
    photo: NullPhoto,
    fullName: '',
    job: ''
  })

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.job}>{profile.job}</Text>
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
    marginRight: 12,
    borderRadius: 46 / 2
  },
  
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
    textTransform: 'capitalize'
  },

  job: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 12,
    textTransform: 'capitalize'
  }
})
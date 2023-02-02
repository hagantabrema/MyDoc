import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChevronRight, NullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const DoctorItem = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.profile}>
            <Image source={NullPhoto} style={styles.avatar}/>
            <View style={styles.text}>
                <Text style={styles.name}>Eleanor Alexandra</Text>
                <Text style={styles.message}>Wanita</Text>
            </View>
      </View>
      <ChevronRight />
    </TouchableOpacity>
  )
}

export default DoctorItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },

  profile: {
    flexDirection: 'row'
  },

  avatar: {
    height: 46,
    width: 46,
    marginRight: 12
  },

  name: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 4
  },

  message: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    fontSize: 12
  }
})
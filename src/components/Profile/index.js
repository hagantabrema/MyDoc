import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IconRemovePhoto, NullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const Profile = ({name, job}) => {
  return (
    <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
            <Image source={NullPhoto} style={styles.avatar} />
            <IconRemovePhoto style={styles.icon} />
        </View>
        {name && (
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.job}>{job}</Text>
          </View>
        )}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center'
    },

    avatarWrapper: {
      height: 130,
      width: 130, 
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 130 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      //marginTop: 40
    },

    avatar: {
      height: 110,
      width: 110,
    },

    icon: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },

    name: {
      color: colors.text.primary,
      fontFamily: fonts.primary[600],
      fontSize: 20,
      marginBottom: 2
    },
    
    job: {
      color: colors.text.secondary,
      fontFamily: fonts.primary.normal,
      fontSize: 16,
      textAlign: 'center'
    },
})
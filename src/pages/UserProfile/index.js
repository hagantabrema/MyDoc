import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item, Header, Profile } from '../../components'
import { NullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
            <Profile name="Haganta Bangun" job="Software Engineer" />
            <View style={styles.settings}>
                <Item name="Edit Profile" desc="Last updated: yesterday" icon="edit-profile" onPress={() => navigation.navigate('EditProfile')} />
                <Item name="Language" desc="Available in 12 languages" icon="language" />
                <Item name="Rate Us" desc="on Google Play Store" icon="rate" />
                <Item name="Help Center" desc="Read our guidelines" icon="help" />
            </View>
        </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    content: {
        flex: 1,
        justifyContent: 'space-evenly'
    },

    settings: {
        paddingVertical: 20,
    },

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
    },
})
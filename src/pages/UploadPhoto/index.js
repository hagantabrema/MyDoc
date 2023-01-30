import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, NullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Upload Photo" />
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.avatarWrapper}>
              <Image source={NullPhoto} style={styles.avatar}/>
              <IconAddPhoto style={styles.addPhoto}/>
            </View>
            <Gap height={26} />
            <Text style={styles.name}>Haganta Bangun</Text>
            <Gap height={4} />
            <Text style={styles.job}>Software Engineer</Text>
          </View>
          <View>
            <Button title="Upload and Continue" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} />
            <Link text="Skip for this" size={16} align="center"/>
          </View>
        </View>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },

    container: {
      flex: 1
    },

    avatarWrapper: {
      height: 130,
      width: 130, 
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 130 / 2,
      alignItems: 'center',
      justifyContent: 'center'
    },

    avatar: {
      height: 110,
      width: 110
    },

    addPhoto: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },

    name: {
      color: colors.text.primary,
      fontFamily: fonts.primary[600],
      fontSize: 24,
    },

    job: {
      color: colors.text.secondary,
      fontFamily: fonts.primary.normal,
      fontSize: 18,
    },

    profile: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
})
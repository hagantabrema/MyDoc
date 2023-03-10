import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, IconRemovePhoto, NullPhoto } from '../../assets'
import { colors, fonts, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message'
import { getDatabase, ref, set, update } from "firebase/database"

const UploadPhoto = ({route, navigation}) => {

  const [hasPhoto, setHasPhoto] = useState(false)
  const [photo, setPhoto] = useState(NullPhoto)
  const [photoForDB, setPhotoForDB] = useState('')

  const {fullName, job, email, uid} = route.params

  const getImage = () => {
    launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      quality: 0.5,
      maxHeight: 200,
      maxWidth: 200
    }, (res) => {
      if (res.didCancel || res.errorCode) {
        showMessage({
          message: 'Anda belum memilih foto',
          type: "default",
          backgroundColor: colors.error,
          color: 'white'
        });
      } else {
        console.log('image is chosen:', res)
        const source = {uri: res.assets[0].uri}
        setPhotoForDB(`data:${res.assets[0].type};base64, ${res.assets[0].base64}`)
        setPhoto(source)
        setHasPhoto(true)
      }
    })
  }

  const uploadAndContinue = () => {
    const data = route.params
    data.photo = photoForDB

    const db = getDatabase()
    set(ref(db, 'users/' + uid), data)
    storeData('users', data)

    console.log(data)
    
    navigation.replace('MainApp')
  }

  return (
    <View style={styles.container}>
        <Header title="Upload Photo" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <View style={styles.profile}>
            <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
              <Image source={photo} style={styles.avatar}/>
              {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
              {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
            </TouchableOpacity>
            <Gap height={26} />
            <Text style={styles.name}>{fullName}</Text>
            <Gap height={4} />
            <Text style={styles.job}>{job}</Text>
          </View>
          <View>
            <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue} />
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
        paddingBottom: 64,
    },

    container: {
      flex: 1,
      backgroundColor: 'white'
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
      width: 110,
      borderRadius: 110 / 2
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
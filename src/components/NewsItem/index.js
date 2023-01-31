import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CityPicture } from '../../assets'
import { colors, fonts } from '../../utils'
import Gap from '../Gap'

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text("title")}>Is it safe to stay at home during coronavirus?</Text>
        <Gap height={4} />
        <Text style={styles.text()}>Today</Text>
      </View>
      <Image source={CityPicture} style={styles.picture}/>
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16
  },

  textContainer: {
    flex: 1
  },

  text: (category) => ({
    fontFamily: category === "title" ? fonts.primary[600] : fonts.primary.normal,
    fontSize: category === "title" ? 16 : 12,
    color: category === "title" ? colors.text.primary : colors.text.secondary,
  }),

  picture: {
    width: 80,
    height: 60,
    alignSelf: 'center',
    borderRadius: 10
  },
})
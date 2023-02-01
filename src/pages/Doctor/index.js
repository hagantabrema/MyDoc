import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctors } from '../../components'
import { colors, fonts } from '../../utils'

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.contentWrapper}>
            <HomeProfile />
            <Text style={styles.welcomeText}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory onPress={() => navigation.navigate('DoctorList')}/>
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.text}>Top Rated Doctors</Text>
            <RatedDoctors />
            <RatedDoctors />
            <RatedDoctors />
            <Text style={styles.text}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },

  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  contentWrapper: {
    paddingHorizontal: 16
  },

  welcomeText: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    marginTop: 30,
    marginBottom: 16
  },

  text: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
    marginBottom: 16,
    marginTop: 30
  },

  scrollWrapper: {
    marginHorizontal: -16
  },

  category: {
    flexDirection: 'row'
  }
})
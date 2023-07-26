import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../components/banners/HomeBanner'
import CategoryCards from '../components/cards/CategoryCards'
import ProductCards from '../components/cards/ProductCards'
import ProductList from '../components/list/ProductList'
import TopNavigation from '../components/navigations/topNavigation/TopNavigation'
import SectionTitle from '../components/titles/SectionTitle'

const Home = ({isDarkMode}:any) => {
  return (
      <ScrollView overScrollMode='never' style={styles.ScrollView}>
        <TopNavigation mode={isDarkMode ? 'dark' : 'light'} />
        <HomeBanner />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Shop by Categories'} link={'See All'} />
        <CategoryCards mode={isDarkMode ? 'dark' : 'light'}/>
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Latest Products'} />
        <ProductCards mode={isDarkMode ? 'dark' : 'light'} />
        <SectionTitle mode={isDarkMode ? 'dark' : 'light'} title={'Recomended For you'} link={'See All'} />
        <ProductList mode={isDarkMode ? 'dark' : 'light'}/>
      </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    ScrollView: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        fontFamily: 'Roboto',
    },
    Text: {
        color: 'white',
    },
})
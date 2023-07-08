import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import common from '../../assets/style/common.jsx'
import darkmode from '../../assets/style/darkmode.jsx'
import lightmode from '../../assets/style/lightmode.jsx'

const ProductList = ({mode}:any) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEnabled style={common.CardsSlider}>
      <View style={common.ProductCard}>
        <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
        <View style={styles.TextContainer}>
          <Text style={[common.MediumHeading, (mode==='dark') ? darkmode.Heading : lightmode.Heading]}>$550.00</Text>
          <Text numberOfLines={2} style={[common.SmallText, (mode==='dark') ? darkmode.Heading : lightmode.Heading]}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
        </View>    
      </View>
      
    </ScrollView>
  )
}

export default ProductList

const styles = StyleSheet.create({

  ImageContainer: {
      width: '100%',
      resizeMode: 'cover',
      height: 150,
      borderRadius: 10,
  },
  TextContainer: {},
  Price: {},
  Title: {},
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductList = () => {
  return (
    <View style={styles.ProductCard}>
        <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
        <View style={styles.TextContainer}>
        <Text style={styles.Price}>$550.00</Text>
        <Text numberOfLines={2} style={styles.Title}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
        </View>    
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    ProductCard: {
        width: '48%',
    },
    ImageContainer: {
        width: '100%',
        resizeMode: 'cover',
        height: 200,
        borderRadius: 10,
  },
  TextContainer: {},
  Price: {},
  Title: {},
})
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ProductCards = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEnabled style={styles.Products}>
        <View style={styles.ProductCard}>
            <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
            <View style={styles.TextContainer}>
                <Text style={styles.Price}>$550.00</Text>
                <Text numberOfLines={2} style={styles.Title}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
            </View>    
        </View>
        <View style={styles.ProductCard}>
            <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
            <View style={styles.TextContainer}>
                <Text style={styles.Price}>$550.00</Text>
                <Text numberOfLines={2} style={styles.Title}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
            </View>    
        </View>
        <View style={styles.ProductCard}>
            <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
            <View style={styles.TextContainer}>
                <Text style={styles.Price}>$550.00</Text>
                <Text numberOfLines={2} style={styles.Title}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
            </View>    
        </View>
        <View style={styles.ProductCard}>
            <Image style={styles.ImageContainer} source={{ uri: 'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg' }} />  
            <View style={styles.TextContainer}>
                <Text style={styles.Price}>$550.00</Text>
                <Text numberOfLines={2} style={styles.Title}>Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (514-516)</Text>
            </View>    
        </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    Products: {
        height: 280,
        width: '100%',
        paddingVertical: 8,
    },
    ProductCard: {
        width: 200,
        height: 210,
        marginRight: 20,
    },
    ImageContainer: {
        width: '100%',
        resizeMode: 'cover',
        height: 210,
        borderRadius: 10,
    },
    TextContainer: {
        paddingVertical: 10,
    },
    Price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    Title: {
        fontSize: 14,
        color: '#ffffff90',
    }
})
export default ProductCards
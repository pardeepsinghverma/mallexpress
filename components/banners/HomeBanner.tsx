import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeBanner = () => {
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={{uri:'https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg'}}/>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({
    Container: {
        padding: 0,
    },
    Image: {
        width: '100%',
        height: 230,
        borderRadius: 10,
    }
})
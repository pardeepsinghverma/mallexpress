import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import variables from '../style/variable.jsx';

const HomeBanner = () => {
  return (
    <View style={styles.Container}>
         <Image style={styles.Image} source={variables.slide1} />  
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
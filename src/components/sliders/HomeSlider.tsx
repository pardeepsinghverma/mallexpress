 import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import variables from '../../assets/style/variable.jsx';
 
 const HomeSlider = () => {
   return (
     <View>
       {/* <FlatList> */}
         <Image style={styles.Image} source={variables.shirt} />  
       {/* </FlatList> */}
     </View>
   )
 }
 
 export default HomeSlider
 
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
  },
 })
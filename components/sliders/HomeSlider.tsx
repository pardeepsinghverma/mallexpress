 import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 const HomeSlider = () => {
   return (
     <View>
       <FlatList>
         <Image source={{uri:'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'}} />
       </FlatList>
     </View>
   )
 }
 
 export default HomeSlider
 
 const styles = StyleSheet.create({})
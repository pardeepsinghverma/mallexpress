import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import common from '../style/common.jsx';
import darkmode from '../style/darkmode.jsx';
import lightmode from '../style/lightmode.jsx';
import variables from '../style/variable.jsx';

const ProductCards = ({mode}:any) => {
    return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal scrollEnabled style={common.CategoryCardsSlider}>
            
        <View style={common.CategoryCard}>
            <View style={styles.ImageBg}>
                <Image style={styles.Image} source={variables.shirt} />  
            </View>
            <View style={styles.TextContainer}>
                <Text numberOfLines={2} style={[common.SmallText, common.Bold, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>Lymio Dresses</Text>
            </View>    
        </View>
        <View style={common.CategoryCard}>
            <View style={styles.ImageBg}>
                <Image style={styles.Image} source={variables.shirt} />  
            </View>
            <View style={styles.TextContainer}>
                <Text numberOfLines={2} style={[common.SmallText, common.Bold, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>Lymio Dresses</Text>
            </View>    
        </View>
        <View style={common.CategoryCard}>
            <View style={styles.ImageBg}>
                <Image style={styles.Image} source={variables.shirt} />  
            </View>
            <View style={styles.TextContainer}>
                <Text numberOfLines={2} style={[common.SmallText, common.Bold, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>Lymio Dresses</Text>
            </View>    
        </View>
        <View style={common.CategoryCard}>
            <View style={styles.ImageBg}>
                <Image style={styles.Image} source={variables.shirt} />  
            </View>
            <View style={styles.TextContainer}>
                <Text numberOfLines={2} style={[common.SmallText, common.Bold, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>Lymio Dresses</Text>
            </View>    
        </View>
        <View style={common.CategoryCard}>
            <View style={styles.ImageBg}>
                <Image style={styles.Image} source={variables.shirt} />  
            </View>
            <View style={styles.TextContainer}>
                <Text numberOfLines={2} style={[common.SmallText, common.Bold, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>Lymio Dresses</Text>
            </View>    
        </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({

    Image: {
        width: '100%',
        resizeMode: 'contain',
        height: '100%',
    },
    ImageBg: {
        width: 80,
        height: 80,
        padding: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
    },
    TextContainer: {
        paddingVertical: 10,
    },

})
export default ProductCards
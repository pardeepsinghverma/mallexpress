import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react';
import common from '../../assets/style/common.jsx';
import darkmode from '../../assets/style/darkmode.jsx';
import lightmode from '../../assets/style/lightmode.jsx';
import variables from '../../assets/style/variable.jsx';
import { categories } from '../../demo/products';

interface CategoryCardsProps {
    item: {
        id: string,
        name: string,
        image: string,
    }
}

const ProductCards = ({ mode }: any, { item }: CategoryCardsProps) => {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}
            horizontal
            scrollEnabled
            style={common.CategoryCardsSlider}
                renderItem={({ item }) => (
                    <View style={common.CategoryCard}>
                        <View style={styles.ImageBg}>
                            <Image style={styles.Image} source={item.image} />  
                        </View>
                        <View style={styles.TextContainer}>
                            <Text numberOfLines={2} style={[common.SmallText, common.Bold, common.TextCenter, (mode==='dark') ? darkmode.SmallText : lightmode.SmallText]}>{item.name}</Text>
                        </View>    
                    </View>
                )}
        >

        </FlatList>
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
        padding: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
    },
    TextContainer: {
        paddingVertical: 10,
        textAlign: 'center',
    },

})
export default ProductCards
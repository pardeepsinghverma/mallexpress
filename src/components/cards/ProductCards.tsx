import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import React from 'react';
import common from '../../assets/style/common.jsx';
import darkmode from '../../assets/style/darkmode.jsx';
import lightmode from '../../assets/style/lightmode.jsx';
import { products } from '../../demo/products';

interface ProductCardsProps {
    item: {
        id: string,
        name: string,
        description?: string,
        price: number,
        category?: string,
    }
}

const ProductCards = ({ mode}: any, { item }: ProductCardsProps) => {
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}
            horizontal
            scrollEnabled
            style={common.CardsSlider}
            renderItem={({ item }) => (
                // 
                <View style={common.ProductCard}>
                    <Image style={styles.ImageContainer} source={{ uri: item.image }} />  
                    <View style={styles.TextContainer}>
                        <Text style={[common.MediumHeading, common.Bold, (mode === 'dark') ? darkmode.Heading : lightmode.Heading]}>
                            {item.price}
                        </Text>
                        <Text numberOfLines={2} style={[common.SmallText, (mode === 'dark') ? darkmode.Heading : lightmode.Heading]}>
                            {item.name}
                        </Text>
                    </View>    
                </View>
                // 
            )}
        >
    </FlatList>
  )
}
const styles = StyleSheet.create({

    ImageContainer: {
        width: '100%',
        resizeMode: 'cover',
        height: 150,
        borderRadius: 10,
    },
    TextContainer: {
        paddingVertical: 10,
    },

})
export default ProductCards
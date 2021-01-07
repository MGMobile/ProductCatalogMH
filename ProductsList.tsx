import React from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Product, ProductListProps} from './interface';
import ProductItem from './ProductItem';

const ProductList = ({data}:ProductListProps) => {
    return (
        <View style={{flex:1}}>
            <FlatList 
                data={data} 
                keyExtractor={(item) => item.id.toString() } 
                renderItem={({item}) => <ProductItem item={item} />} />
        </View>
    )
}
//
export default ProductList;
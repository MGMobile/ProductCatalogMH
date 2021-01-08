// components/ProductsList.js

import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ProductItem, {Product} from "./ProductItem";

export interface ProductsListProps {
    products: Array<Product>,
    navigation?: any
}

export default class ProductsList extends React.Component<ProductsListProps> {
    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this.props.products}
                    renderItem={({item}) => (<ProductItem product={item} navigation={this.props.navigation} />)}
                    keyExtractor={(item) => item.id.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});

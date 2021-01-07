// components/ProductItem.js

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export interface Product {
    id: number,
    name: string,
    description: string,
    stock: number,
    price: number,
    picture: string
}

export interface ProductItemProps {
    product: Product,
    navigation: any
}

export default class ProductItem extends React.Component<ProductItemProps> {
    render() {
        const {name, description, stock, price, picture} = this.props.product;
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Fiche produit", {product: this.props.product})} } style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: picture}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.name_text}>{name}</Text>
                        <Text style={styles.price_text}>{price}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{description}</Text>
                        {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                    </View>
                    <View style={styles.stock_container}>
                        <Text style={styles.stock_text}>{stock} éléments en stock</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    name_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    price_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    stock_container: {
        flex: 1
    },
    stock_text: {
        textAlign: 'right',
        fontSize: 14
    }
});

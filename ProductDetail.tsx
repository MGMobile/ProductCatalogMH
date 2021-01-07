import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProductDetail (props:any) {
    return (
        <View style={{flex:1}}>
            <Text>{props.route.params.product.name}</Text>
            <Text>{props.route.params.product.description}</Text>
            <Text>{props.route.params.product.price}</Text>
            <Text>{props.route.params.product.stock}</Text>
            <Image style={styles.image}
                    source={{uri: props.route.params.product.picture}}
                />
        </View>
        
    )

}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    }
});

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {connect} from 'react-redux';

function ProductDetail (props:any) {
    const id = props.route.params.productId
    const products = props.products

    const product = products.find( (item:any) => item.id===id )

    return (
        <View style={{flex:1}}>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Text>{product.stock}</Text>
            <Image style={styles.image}
                    source={{uri: product.picture}}
                />
        </View>
        
    )

}

const mapStateToProps = (state:any) =>{
    return state;
}

export default connect(mapStateToProps) (ProductDetail)

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    }
});

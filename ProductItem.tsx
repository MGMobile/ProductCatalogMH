import React from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Product} from './interface';

const ProductItem = ({item}: {item: Product}) => {
    return (
    <View style={{flexDirection:"row",height:100,backgroundColor:"red"}}>
        <Text style={{flex:1,backgroundColor:"red"}}>{item.description}</Text>
        <View style={{flex:2}}>
          <View style={{flex:1,flexDirection:"row"}}>
            <Text style={{flex:2}}>{item.name}</Text>
            <Text style={{flex:1}}>{item.price}</Text>
          </View>
          <Text style={{flex:4,backgroundColor:"yellow",flexDirection:"row"}}>{item.description}</Text>
          <Text style={{flex:1,backgroundColor:"green",flexDirection:"row"}}>{item.stock}</Text>
        </View>
    </View>
    )
}

export default ProductItem;
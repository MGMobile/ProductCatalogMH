import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductsList';
import {Product} from './interface';

export const FAKE_DATA: Product[] = [
  {id:1, name: 'produit 1', description: 'description 1', stock: 100, price:12, picture:''},
  {id:2, name: 'produit 2', description: 'description 2', stock: 100, price:12, picture:''},
  {id:3, name: 'produit 3', description: 'description 3', stock: 100, price:12, picture:''},
  {id:4, name: 'produit 4', description: 'description 4', stock: 100, price:12, picture:''},
  {id:5, name: 'produit 5', description: 'description 5', stock: 100, price:12, picture:''},
]

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList data={FAKE_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
});

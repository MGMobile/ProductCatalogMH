import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductsList from "./ProductsList";
import {Product} from "./ProductItem";

const DEFAULT_PRODUCTS: Array<Product> = [
    {id: 0, name: 'Super produit', description: 'Ceci est le meilleur produit de notre gamme', stock: 3, price: 50, picture: ''},
    {id: 1, name: 'Produit Cool', description: 'Ceci est une bon produit', stock: 5, price: 30, picture: ''}
];

export default function App() {
  return (
      <View style={styles.container}>
          <ProductsList products={DEFAULT_PRODUCTS} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80
  },
});

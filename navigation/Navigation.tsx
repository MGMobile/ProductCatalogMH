import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProductsPage from '../ProductsPage';
import ProductDetail from '../ProductDetail';

const ProductsStack = createStackNavigator();

export default function ProductsStackScreen() {
    return (
        <NavigationContainer>
            <ProductsStack.Navigator>
                <ProductsStack.Screen name="Liste de produits" component={ProductsPage}/>
                <ProductsStack.Screen name="Fiche produit" component={ProductDetail} initialParams={{
                product: {
                    id: 0,
                    name: 'Mon produit',
                    description: 'Ceci est une description pour un produit test. La vue a été appelée sans paramètres',
                    price: 20,
                    stock: 10,
                    picture: 'https://pixabay.com/get/57e9d04b4e54a814f6da8c7dda79367d133fd6e450566c48702973d7964fcd5ab8_640.jpg'}
                }} />
            </ProductsStack.Navigator>
        </NavigationContainer>
    );
}
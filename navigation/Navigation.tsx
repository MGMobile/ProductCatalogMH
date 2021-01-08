import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ProductsPage from '../ProductsPage';
import ProductDetail from '../ProductDetail';
import ProductItem from '../ProductItem';
import Favorites from '../Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ProductsStack = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

function ProductsStackScreen() {
    return (
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
    );
}

export default function TabNavigatorScreen(){
    return (
        <NavigationContainer>
            <TabNavigator.Navigator tabBarOptions={{
                                            activeBackgroundColor: '#DDDDDD',
                                            inactiveBackgroundColor: '#FFFFFF',
                                            showLabel: false,
                                    }}>
                <TabNavigator.Screen name="Liste" component={ProductsStackScreen} options={{
                                            tabBarIcon: () => <Image source={require('../images/ic_search.png')} style={styles.icon}/> }}  />
                <TabNavigator.Screen name="Favoris" component={Favorites} options={{
                                            tabBarIcon: () => <Image source={require('../images/ic_favorite.png')} style={styles.icon}/> }}  />
            </TabNavigator.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

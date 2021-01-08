import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import ProductsList from "./ProductsList";
import {Product} from "./ProductItem";
import SearchBar from './SearchBar';
import {connect} from 'react-redux';

const API_KEY = "5d796207b5eedc635380d9b3"; // Replace with your API key for restdb.io

const HEADERS = {
	'Content-Type': 'application/json',
	'cache-control': 'no-cache',
	'x-apikey': API_KEY
}

class ProductsPage extends React.Component<{navigation:any, dispatch:any}> {
  state = {
    products_all : [],
    products : []
  }


  async fetchAPI() {
    const response = await fetch(
      'https://productcatalog-4b5d.restdb.io/rest/products',
      {
        method: 'GET',
        headers: HEADERS,
      });
    if (!response.ok) {
      throw new Error('Error - 404 Not Found')
    }
      const result = await response.json();
      console.log(result)
      const liste_produits:Array<Product> = result.map((elem:any,index:number) => ({id: elem.id, name: elem.name, description: elem.description, stock: elem.stock, price: elem.price, picture: elem.picture}) )
      this.setState({products:liste_produits, products_all: liste_produits})
      const action = {type: "STORE_PRODUCTS", products: liste_produits}
      this.props.dispatch(action)

    return result;
  }
  
  componentDidMount(){
    this.fetchAPI()
  }

  recherche = (texte:string) => {
    console.log(texte)

    const new_products = this.state.products_all.filter((elem:any) => elem.name.toUpperCase().includes(texte.toUpperCase()))

    this.setState({products:new_products})
  }
  
  render () {
    return (
        <View style={styles.container}>
            <SearchBar fct={this.recherche} />
            {this.state.products.length===0 ? <ActivityIndicator style={styles.loader} size="large" color="black" /> : <ProductsList products={this.state.products} navigation={this.props.navigation} />}
            
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch: (action:any) => dispatch(action) 
  }
}


export default connect (null, mapDispatchToProps) (ProductsPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  loader: {
    flex: 1
  }
});

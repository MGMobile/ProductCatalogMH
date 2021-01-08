import React from 'react';
import ProductsStackScreen from './navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './store/configureStore';
import {preventAutoHideAsync} from 'expo-splash-screen';


export default class App extends React.Component {

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
  }
  
  render () {
    return (
      <Provider store={Store}>
        <ProductsStackScreen />
      </Provider>
      
    );
  }
}
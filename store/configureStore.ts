import { createStore } from 'redux';
import storeProducts from './reducers/productsReducers';

export default createStore(storeProducts)
import { ProductsListProps } from "../../ProductsList";

const initialState: ProductsListProps = { products: [] };

export default function storeProducts(state:ProductsListProps = initialState, action:any) {
    let nextState;
    switch (action.type) {
        case 'STORE_PRODUCTS':
            return {...state, products: action.products}
        default:
            return state
    }
}
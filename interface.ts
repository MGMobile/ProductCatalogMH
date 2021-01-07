export interface Product{
    id:number,
    name: string,
    description: string,
    stock: number,
    price: number,
    picture: string
}

export interface ProductListProps {
    data : Product[]
}
import { Product } from './product.interface'

export interface User {
    id: string,
    name: string,
    points: number,
    redeemHistory: Product[]
}
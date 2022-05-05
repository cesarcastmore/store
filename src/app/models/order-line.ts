import { Product } from './product';

export interface OrderLine {
    product_id: string | null;
    product?: Product;
    price: number;
    quantity: number;
    amount: number;
    order_id: string;
    id?: string;
}

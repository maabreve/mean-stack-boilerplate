import { Product } from '../../products/model/product.model';

export interface Cart {
    id: string;
    product: Product;
    quantity: number;
}

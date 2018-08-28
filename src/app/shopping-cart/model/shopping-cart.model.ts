import { Product } from '../../products/model/product.model';

export interface ShoppingCart {
    id: string;
    product: Product;
    number: number;
}

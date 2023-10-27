import { ProductInterface } from 'interfaces/product';
import { SupermarketInterface } from 'interfaces/supermarket';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  supermarket_id: string;
  stock_level: number;
  reorder_level: number;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  supermarket?: SupermarketInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  supermarket_id?: string;
}

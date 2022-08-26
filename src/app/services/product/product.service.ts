import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { PRODUCTS } from '../../../assets/mockProducts'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product []

  constructor() {
    this.products = PRODUCTS;
  }

  getProducts() {
    return this.products
  }

  getProduct(productId: number) {
    return this.products.filter((product) => product.id == productId)
  }
}

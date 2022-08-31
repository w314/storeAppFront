import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { PRODUCTS } from '../../../assets/mockProducts'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS)
    return products;
  }

  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(product => id === product.id)!;
    return of(product)
  }

  getRandomProduct(): Observable<Product> {
    const index:number = Math.floor(Math.random() * PRODUCTS.length)
    return of(PRODUCTS[index]);
  }
}

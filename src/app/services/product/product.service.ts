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
}

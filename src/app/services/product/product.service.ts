import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { PRODUCTS } from '../../../assets/mockProducts'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS)
    return products;
    // return this.http.get<Product[]>('http://192.168.254.12:3001/products')
    // return this.http.get<[]>('https://jsonplaceholder.typicode.com/users')
    
  }

  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(product => id === product.id)!;
    return of(product)
  }

  getRandomProduct(): Observable<Product> {
    const index:number = Math.floor(Math.random() * PRODUCTS.length)
    return of(PRODUCTS[index]);
  }

  getProductPrice(id: number): Observable<number> {
    const product: Product = PRODUCTS.filter(p => p.id = id)[0]
    return of(product.price)
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import models
import { OrderItem } from '../../models/OrderItem'
import { Order } from '../../models/Order'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Order;

  constructor() {
    this.cart = {
      items: [],
      status: 'active',
    }
  }

  getCart() {
    return this.cart.items;
  }

  addToCart(item: OrderItem): void {
    console.log('adding to cart')
    this.cart.items.push(item);
    // return this.cart.items;
  }
}

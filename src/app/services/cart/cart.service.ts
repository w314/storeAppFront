import { Injectable } from '@angular/core';
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
    return this.cart;
  }

  addToCart(item:OrderItem) {
    this.cart.items.push(item);
  }
}

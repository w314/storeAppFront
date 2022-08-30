import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import models
import { OrderItem } from '../../models/OrderItem'
import { Order } from '../../models/Order'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Order = {items:[], status: 'active'};

  constructor() {
  }

  getCart() {
    return this.cart.items;
  }

  addToCart(item: OrderItem): void {
    console.log('adding to cart')
    const index = this.getItemIndex(item.productId)
    if( index === -1 ) {
      this.cart.items.push(item)
    } else {
      this.cart.items[index].quantity += item.quantity;
    }
  }

  getItem(id: number): OrderItem | undefined {
    return this.cart.items.find(item => item.productId === id)
  }

  deleteItem(id: number): void {
    const index = this.getItemIndex(id);
    this.cart.items.splice(index, 1)
  }

  updateItem(item: OrderItem):void {
    const index = this.getItemIndex(item.productId);
    if( item.quantity === 0 ) {
      this.cart.items.splice(index, 1)
    } else {
      this.cart.items[index].quantity = item.quantity
    }
  }

  private getItemIndex(id: number) {
    return this.cart.items.findIndex(cartItem => cartItem.productId === id);
  }
}

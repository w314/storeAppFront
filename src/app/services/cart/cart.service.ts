import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import models
import { OrderItem } from '../../models/OrderItem'
import { Order } from '../../models/Order'
import { isNgTemplate } from '@angular/compiler';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Order = {items:[], status: 'active'};

  constructor(
    private productService: ProductService,
  ) {
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

  getItem(id: number): OrderItem | undefined {CartService
    return this.cart.items.find(item => item.productId === id)
  }

  deleteItem(id: number): void {
    // const index = this.getItemIndex(id);
    // this.cart.items.splice(index, 1)
    this.cart.items = this.cart.items.filter((item) => item.productId != id)
    console.log(this.cart.items)
  }

  updateQuantity(id: number, quantity: number):void {
    console.log(`updating product wiht id: ${id} to quantity: ${quantity}`)
    // const index = this.getItemIndex(id);
    if( quantity === 0 ) {
      this.deleteItem(id)
      // this.cart.items.splice(index, 1)
    } else {
      this.cart.items.forEach(item => {
        if( item.productId === id) {
          item.quantity = quantity
        }
      }
      )
    }
  }

  getNumberOfItems(): number {
    return this.cart.items.reduce((prevTotal, curr)=> prevTotal = curr.quantity, 0)
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    this.cart.items.forEach((item) => {
      let price = 0
      this.productService.getProductPrice(item.productId)
        .subscribe(productPrice => price = productPrice)
      // totalPrice += item.quantity * price as number
      totalPrice += price
    })

    return totalPrice
  }

  private getItemIndex(id: number) {
    return this.cart.items.findIndex(cartItem => cartItem.productId === id);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import OrderItem model
import { OrderItem } from '../models/OrderItem';
import { CartService } from '../services/cart/cart.service';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit {

  // orderItem will be received from parent
  @Input() id: number = 0; 
  quantity: number = 0;
  item: OrderItem = {productId: this.id, quantity: this.quantity};
  // quantity: number = 0;

  // create event emitter to communicate click of
  // add to cart button
  // @Output() addedToCart: EventEmitter<OrderItem> = new EventEmitter;

  // add cartService as parameter to constructor
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.item = {productId: this.id, quantity: this.getItem(this.id)}
  }
  

  deleteItem(id: number) {
    this.cartService.deleteItem(id);
  }
  // updateQuantity(quantity: number | string) {
  //   this.quantity = quantity as number
  // } 

  addToCart(item: OrderItem) {
    this.cartService.addToCart(item)
  }

  getItem(id: number):number {
    const item = this.cartService.getItem(id)
    if(item) {
      return item.quantity 
    } else {
      return 0
    }

  }


}

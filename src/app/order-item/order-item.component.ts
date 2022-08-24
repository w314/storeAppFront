import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../models/Order';
// import OrderItem model
import { OrderItem } from '../models/OrderItem';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit {

  // orderItem will be received from parent 
  @Input() orderId: number;
  // create event emitter to communicate click of
  // add to cart button
  @Output() addedToCart: EventEmitter<OrderItem> = new EventEmitter;

  // add cartService as parameter to constructor
  constructor(private cartService: CartService) { 
    this.orderId = 0;
  }

  ngOnInit(): void {
  
  }

  addToCart(productId: number, quantity: number) {
    this.addedToCart.emit()
    this.cartService.addToCart(productId, quantity)
  }

}

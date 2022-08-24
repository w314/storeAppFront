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
  @Input() productId: number;
  quantity: number;
  @Input() item: OrderItem;

  // create event emitter to communicate click of
  // add to cart button
  @Output() addedToCart: EventEmitter<OrderItem> = new EventEmitter;

  // add cartService as parameter to constructor
  constructor(private cartService: CartService) { 
    this.productId = 0;
    this.quantity = 0;
    this.item = {
      productId: this.productId,
      quantity: this.quantity,
    }
  }

  ngOnInit(): void {
  
  }
  
  updateQuantity(quantity: number | string) {
    this.quantity = quantity as number
  }

  addToCart(item: OrderItem) {
    this.addedToCart.emit()
    console.log(item)
    this.cartService.addToCart(item)
  }


}

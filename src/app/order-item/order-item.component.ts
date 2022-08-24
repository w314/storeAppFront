import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../models/Order';
// import OrderItem model
import { OrderItem } from '../models/OrderItem';

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
  @Output() addToCart: EventEmitter<OrderItem> = new EventEmitter;

  constructor() { 
    this.orderId = 0;
  }

  ngOnInit(): void {
  
  }

}

import { Component, OnInit, Input } from '@angular/core';
// import OrderItem model
import { OrderItem } from '../models/OrderItem';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})

export class OrderItemComponent implements OnInit {

  // orderItem will be received from parent 
  orderItem: OrderItem;

  constructor() { 
    this.orderItem = {
      productId: 0,
      quantity: 0
    }
  }

  ngOnInit(): void {
  
  }

}

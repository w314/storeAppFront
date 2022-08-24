import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { OrderItem } from '../models/OrderItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title: string = 'Your Cart';
  cart: OrderItem[];

  constructor(private cartService: CartService) {
    this.cart = []
   }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  // ngOnChange(): void {
  //   this.cart = this.cartService.getCart();
  // }

}

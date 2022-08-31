import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { OrderItem } from '../models/OrderItem';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../app.component.css','./cart.component.css']
})
export class CartComponent implements OnInit {
  title: string = 'Your Cart';
  cart: OrderItem[] = [];

  constructor(
      private cartService: CartService,
      private location: Location,
      private productService: ProductService,
  ){}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  // ngOnChange(): void {
  //   this.cart = this.cartService.getCart();
  // }

  goBack(): void {
    this.location.back();
  }

  getRandomProductId(): number {
    let id: number = 0;
    this.productService.getRandomProduct()
      .subscribe(product => id = product.id)
    return id;
  }

}

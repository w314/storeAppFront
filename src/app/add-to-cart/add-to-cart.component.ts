import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() id: number = 0;
  quantity: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.addToCart({productId: this.id, quantity: this.quantity})
  }

}

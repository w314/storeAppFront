import { Component, OnInit } from '@angular/core';

// import Product model
import { Product } from '../models/Product';
// import Product service to populate product list
import { ProductService } from '../services/product/product.service'
// import cart service for add to cart button
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // add title variable
  title: string = 'Product List';
  // add products array to store productList
  products: Product[] = [];
  
  getProducts():void {
    this.productService.getProducts()
      .subscribe(products => this.products = products)
  }
  // add productService as paramter to constructor
  // add cartService as parameter to constructor
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    // get productList from productService
    this.getProducts();
  }

  addToCart(productId: number, quantity: number): void {
    this.cartService.addToCart({productId, quantity});
  }

}

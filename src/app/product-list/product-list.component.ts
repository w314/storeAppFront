import { Component, OnInit } from '@angular/core';
// import Product model
import { Product } from '../models/Product';
// import Product service
import { ProductService } from '../services/product/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // add title variable
  title: string = 'Product List';
  // add products array to store productList
  productList: Product[] = [];
  
  // add productService as paramter to constructor
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // get productList from productService
    this.productList = this.productService.getProducts();

  }

}

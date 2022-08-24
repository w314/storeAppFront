// add Input to imports from @angular/core 
import { Component, OnInit, Input } from '@angular/core';
// import Product model
import { Product } from '../models/Product'
// import router
import { Router } from '@angular/router'
import { ProductService } from '../services/product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // component will get data from parent
  @Input() product: Product
  
  constructor(private router:Router, private productService:ProductService) { 
    // with stricter type checking you have to initialize
    // product in the constructor
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: ''
    }
  }

  ngOnInit(): void {
    // console.log(this.router.routes)
    console.log(this.router.url.slice(9));
    if( this.router.url.slice(1, 8) === 'Product') {
      const productId: number = parseInt(this.router.url.slice(9))
      this.product = this.productService.getProduct(productId)[0]
    }

  }

}

// add Input to imports from @angular/core 
import { Component, OnInit, Input } from '@angular/core';
// import Product model
import { Product } from '../models/Product'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // component will get data from parent
  @Input() product: Product
  
  constructor() { 
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
  }

}

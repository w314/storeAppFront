// add Input to imports from @angular/core 
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

  product: Product | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router:Router, 
    private productService:ProductService
  ) {}

  ngOnInit(): void {
      this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(`id: ${id}`)
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}

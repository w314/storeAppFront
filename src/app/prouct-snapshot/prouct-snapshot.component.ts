import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product'
import { ProductService } from '../services/product/product.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-prouct-snapshot',
  templateUrl: './prouct-snapshot.component.html',
  styleUrls: ['../app.component.css','./prouct-snapshot.component.css']
})
export class ProuctSnapshotComponent implements OnInit {

  @Input() id: number = 0;
  product? : Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct(this.id)
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(product => this.product = product)
  }

}

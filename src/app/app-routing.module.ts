import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import angular router
import { Routes, RouterModule } from '@angular/router'
// import components
import { ProductListComponent } from './product-list/product-list.component'
import { ProductComponent } from './product/product.component'


// add routes
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'Product/:id', component: ProductComponent },
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class AppRoutingModule { }

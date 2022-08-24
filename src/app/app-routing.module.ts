import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import angular router
import { Routes, RouterModule } from '@angular/router'
// import components
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component'
import { CartComponent } from './cart/cart.component';

const PRODUCTPATH = 'Product'

// add routes
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: `${PRODUCTPATH}/:id`, component: ProductComponent },
  { path: `cart`, component: CartComponent }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // export RouterModule
  exports: [RouterModule]
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})


export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import angular router
import { Routes, RouterModule } from '@angular/router'
// import components
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component'
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

// add routes
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: `products/:id`, component: ProductComponent },
  { path: `cart`, component: CartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent}
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

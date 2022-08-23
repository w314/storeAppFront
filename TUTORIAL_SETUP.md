# HOW TO BUILD STORE APP STEP BY STEP


To create project base run:
`ng new storeApp`

## TO DO
### Pages
- Home Page
    - Product List Component
        - Product Item Component
        - quantity component
        - Add To Cart Component
- Product Page
    - Product Component
- Shopping Cart Page
    - product-item component
    - quantity component
- Checkout page
    - cart 
    - payment info
- Order Confirmation page

### Models:
- Product Model

## Plan
### Services
- Product Service
Gets product list.
- Cart Service
Maintains Cart.
### Components:
- Home Page: app-component: Home Page
    - includes product list
- 

## Develep App
### 1. Create Models
#### 1.1 Create Product Model
```bash
mkdir src/app/models
touch src/app/models/Product.ts
```
Content:
```typescript
export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;


    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.description = '';
        this.url = '';
    }
}
```

### 2.2 Create `OrderItem` Model
``` bash
touch src/app/models/OrderItem.ts
```
```typescript

```
### Create `Order` Model
```bash
touch src/app/models/Order.ts
```
```typescript

```
## Create Services
### Product Service
#### Create Product Service
```bash
mkdir src/app/services
mkdir src/app/services/product
ng g c services/product/product
```
#### Edit `product.service.ts`
- create `getProducts` method to fetch product list
```typescript

```
### Cart Service
#### Create Cart Service
```bash
mkdir src/app/services/cart
ng g c services/cart/cart
```
#### Edit `cart.service.ts`
- create `addToCart` method
- create `deleteFromCart` method
- create `modifyQuantity` method
```typescript

```

## Add Router
### Create Module

```bash
ng generate module app-routing --flat --module=app
```
  `--flat`	Puts the file in src/app instead of its own directory.<br>
  `--module=app`	Tells ng generate to register it in the imports array of the AppModule.

### Edit module
``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import angular router
import { Routes, RouterModule } from '@angular/router'
// import components
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

// add routes
const routes: Routes = [
  { path: '', component: ProductListComponent },
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  // export RouterModule
  exports: [RouterModule]
})

export class AppRoutingModule { }
```

## Create Components

### Create NavBar component

``` bash
ng g c NavBar
```

Edit `nav-bar.component.ts`
```typescript

```

Add NavBar to home page
`app.component.html`
```html
```

### Create Order Item component
```bash
ng g c OrderItem
```
### 1. Create Product List Component
#### 1.1 Create component
```bash
ng g c ProductList
```

### 2.2 Edit `product-list.component.ts`
- import `Product` model
- create variable to store `productList`
- create variable to page title
- get product list from ProductService in `ngOnInit()`
```typescript

```

### 2.3 Edit `product-list.component.html`
- show list of products

### 2.4 Edit `app-component.html`
- show product list on home page
```html
<!-- 
  use product-list-component selector
  found in product-list-component.ts
-->
<app-product-list></app-product-list>
```

### 2.5 Check progress
```bash
ng serve --port 3000
```
Check progress on `localhost:3000`, the page should show your product list.

## 3. Create Product Component
### 3.1 Create component
```bash
ng g c Product
```
### 3.2 Edit `product-component.ts`
- import 'Input' from '@angular/core' to be able to get data from the parent component (product-list)
- import `Product` model
- create variable for product and decorate it with `@Input()` to indicate that it will be provided but the parent component
- intialize `product` variable in the constructor

```typescript
```

### 3.3 Edit `product-list-component.html`
- use `<app-product>` to show product passing along the data to child component

```html
<h1>{{ title }}</h1>
<ul>
    <li *ngFor="let product of productList">
        <app-product  [product] = product></app-product>
    </li>
</ul>
```
At this point page should show a list of text "product works!".

### 3.4 Edit `product-component.html'

```html
<img class="productImage" src="{{ product.url }}" alt="{{ product.name }}">
<p class="productName">{{ product.name }}</p>
<p class="productPrice">{{ product.price }}</p>
```
At this point page should show a list of pictures with product name and price.
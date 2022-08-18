# HOW TO BUILD STORE APP STEP BY STEP


To create project base run:
`ng new storeApp`

## TO DO
- Product Model
- Main Page
- Product List Component
- Product Component
- Product Details Page
- shopping cart
- Checkout page
- order confirmation page

## 1. Create Product Model
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

## 2. Create Product List Component
```bash
ng g c ProductList
```

### 2.1 product-list.component.ts
```typescript

```
- import `Product` model
- create variable to store `productList`
- create variable to page title
- get product list from server in `ngOnInit()`

### 2.2 product-list.component.html
- show list of products

### 2.3 app-component.html
- show product list on home page
```html
<!-- 
  use product-list-component selector
  found in product-list-component.ts
-->
<app-product-list></app-product-list>
```

### 2.4 check progress so far
```bash
ng serve --port 3000
```
Check progress on `localhost:3000`, the page should show your product list.

## 3. Create Product Component
```bash
ng g c Product
```


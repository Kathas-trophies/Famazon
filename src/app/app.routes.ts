import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { About } from './about/about';
import { Products } from './products/products';
import { ProductDetails } from './products/details/details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cart', component: Cart },
  { path: 'about', component: About },
  { path: 'menu', component: Products },
  { path: 'details/:id', component: ProductDetails },
];

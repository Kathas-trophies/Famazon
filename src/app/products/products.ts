import { Component } from '@angular/core';
import { IProduct } from '../iproduct.interface';
import { CartService } from '../cart.service';
import { PRODUCTS } from '../products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: IProduct[] = PRODUCTS;

  constructor(private cartService: CartService) {}
  addToCart(p: IProduct): void {
    this.cartService.addToCart(p);
    alert(`${p.name} added to cart!`);
  }
}

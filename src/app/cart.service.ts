import { Injectable } from '@angular/core';
import { IProduct } from './iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  addToCart(product: IProduct): void {
    let existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product });
    }
  }

  getCartItems(): IProduct[] {
    return this.cart;
  }

  calculateTotal() {
    let total = 0;
    for (let product of this.cart) {
      total = total + product.price * product.quantity;
    }
    return total;
  }
}

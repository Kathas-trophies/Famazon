import { Component } from '@angular/core';
import { IProduct } from '../iproduct.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems: IProduct[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {
    this.loadCart();
    this.showTotal();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  showTotal() {
    this.total = this.cartService.calculateTotal();
  }
}

import { Component } from '@angular/core';
import { IProduct } from '../iproduct.interface';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  formSubmitted: boolean = false;
  userform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
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

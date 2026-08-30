import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(private productService: ProductService) {}

  get cartItems() {
    return this.productService.getCartItems();
  }

  removeItem(productName: string) {
    this.productService.removeFromCart(productName);
  }

  clearCart() {
    this.productService.clearCart();
  }

}
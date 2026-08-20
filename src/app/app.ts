import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';


@Component({
  selector: 'app-root',
  imports: [Navbar, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cartCount = 0;

  onAddToCart(productName: string) {
    this.cartCount++;
    console.log('Added:', productName);
  }

}

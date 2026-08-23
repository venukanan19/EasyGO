import { Component, signal } from '@angular/core';
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

  protected readonly searchTerm = signal('');

onAddToCart(item: { name: string; qty: number }) {
  this.cartCount += item.qty;
  console.log(`${item.qty} x ${item.name} added`);
}

  onSearchChange(term: string) {
  this.searchTerm.set(term);
  }

}

import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product-service';


@Component({
  imports: [FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  appName = 'EasyGO';
  currentYear = new Date().getFullYear(); 

  constructor(private productService: ProductService) {}

  get cartCount(): number {
  return this.productService.getCart().length;
  }

  searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchTerm);
  }

  clearSearch() {
  this.searchTerm = '';
  this.searchChange.emit('');
}
}

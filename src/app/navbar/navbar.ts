import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  appName = 'EasyGO';
  currentYear = new Date().getFullYear();

  searchTerm: string = '';

constructor(
  private productService: ProductService,
  private router: Router
) {}

  get cartCount(): number {
    return this.productService.getCart().length;
  }

onSearchChange() {
  this.productService.setSearchTerm(this.searchTerm);
  this.router.navigate(['/products']);
}

  clearSearch() {
    this.searchTerm = '';
    this.productService.setSearchTerm('');
  }
}
import { Component, Input,OnInit, OnDestroy } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { DatePipe } from '@angular/common';
import { Product, ProductService } from '../services/product-service';

@Component({
  imports: [ProductCard, DatePipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit, OnDestroy{
  readonly today = new Date(); 

  products: Product[] = [];

constructor(private productService: ProductService) {}


@Input() searchTerm: string = '';

get filteredProducts(): Product[] {
  return this.productService.searchProducts(this.searchTerm);
}

ngOnInit() {
  this.products = this.productService.getProducts();

  console.log(
    'Product List initialized with',
    this.products.length,
    'products'
  );
}

ngOnDestroy() {
  console.log('ProductListComponent destroyed');
}

}

import { Component,OnInit, OnDestroy, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { DatePipe } from '@angular/common';
import { Product, ProductService } from '../services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [ProductCard, DatePipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit, OnDestroy{
  readonly today = new Date(); 

  products: Product[] = [];
  category = signal('');

constructor(
  private productService: ProductService,
  private route: ActivatedRoute
) {}

get filteredProducts(): Product[] {
  return this.productService.filterProducts(this.category());
}

ngOnInit() {
  this.products = this.productService.getProducts();

this.route.queryParamMap.subscribe(params => {
  this.category.set(params.get('category') || '');
});

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

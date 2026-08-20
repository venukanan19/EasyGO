import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';

  @Output() addToCart = new EventEmitter<string>();

onAddToCart() {
  console.log('ProductCard clicked:', this.productName);
  this.addToCart.emit(this.productName);
}
}
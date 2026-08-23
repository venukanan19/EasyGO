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
  @Input() inStock: boolean = true;



  @Output() addToCart =
  new EventEmitter<{ name: string; qty: number }>();

onAddToCart(qty: string) {
  this.addToCart.emit({
    name: this.productName,
    qty: Number(qty) || 1
  });
}
}
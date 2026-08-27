import { CurrencyPipe, DecimalPipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Highlight } from '../directives/highlight';
import { ShortTextPipe } from '../pipes/short-text-pipe';
import { ProductService } from '../services/product-service';

@Component({
  imports: [NgClass, NgStyle, Highlight, UpperCasePipe, CurrencyPipe, DecimalPipe, ShortTextPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
  @Input() inStock: boolean = true;
  @Input() description: string = '';

  readonly usdToLkr = 320;

get priceInLkr() {
  return this.price * this.usdToLkr;
}

get totalInLkr() {
  return (this.price + 50) * this.usdToLkr;
}

  showFullDescription = false;

toggleDescription() {
  this.showFullDescription = !this.showFullDescription;
}

constructor(private productService: ProductService) {}

onAddToCart(qty: string) {
  this.productService.addToCart(
    this.productName,
    Number(qty) || 1
  );
}
}
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {}
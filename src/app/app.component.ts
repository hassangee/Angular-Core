import { Component } from '@angular/core';
import { Product } from './routing/routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct the typo: styleUrls instead of styleUrl
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product('Sample Name', '1', '123');
  }
}
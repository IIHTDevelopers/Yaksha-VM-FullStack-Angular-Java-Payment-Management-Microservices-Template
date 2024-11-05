import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  /**
   * Loads all products and handles errors
   */
  loadAllProducts(): void {
  }
}

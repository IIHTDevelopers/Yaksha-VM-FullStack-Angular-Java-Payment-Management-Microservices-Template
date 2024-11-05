import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all products
   */
  getAllProducts(): any {
    return null;
  }

  /**
   * Fetch products by owner ID
   */
  getProductsByOwnerId(ownerId: number): any {
    return null;
  }

  /**
   * Create a new product
   */
  createProduct(product: Product): any {
    return null;
  }
}

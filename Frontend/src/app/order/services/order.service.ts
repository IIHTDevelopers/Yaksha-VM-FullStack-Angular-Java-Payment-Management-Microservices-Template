import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all orders with pagination support
   */
  getAllOrders(page: number = 0, size: number = 10): any {
    return null;
  }

  /**
   * Fetch orders by user ID
   */
  getOrdersByUserId(userId: number): any {
    return null;
  }

  /**
   * Create a new order
   */
  createOrder(order: Order): any {
    return null;
  }
}

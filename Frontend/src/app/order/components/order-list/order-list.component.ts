import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  errorMessage: string | null = null;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  /**
   * Loads all orders and handles errors
   */
  loadAllOrders(): void {
  }
}

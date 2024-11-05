import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {
  orderForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
  }

  /**
   * Submits the form to create a new order
   */
  onSubmit(): void {
  }
}

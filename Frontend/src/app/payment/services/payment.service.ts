import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../shared/models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all payments
   */
  getAllPayments(): any {
    return null;
  }

  /**
   * Fetch payments by user ID
   */
  getPaymentsByUserId(userId: number): any {
    return null;
  }

  /**
   * Create a new payment
   */
  createPayment(payment: Payment): any {
    return null;
  }
}

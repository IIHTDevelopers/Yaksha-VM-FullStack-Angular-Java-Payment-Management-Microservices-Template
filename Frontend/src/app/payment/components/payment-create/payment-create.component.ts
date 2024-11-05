import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html'
})
export class PaymentCreateComponent {

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private router: Router
  ) {
  }

}

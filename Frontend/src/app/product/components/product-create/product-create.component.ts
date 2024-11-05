import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
  }
}

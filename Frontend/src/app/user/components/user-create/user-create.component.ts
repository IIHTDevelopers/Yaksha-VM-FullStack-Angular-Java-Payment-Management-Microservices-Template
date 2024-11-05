import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

}

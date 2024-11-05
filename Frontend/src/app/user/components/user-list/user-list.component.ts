import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * Loads all users and handles errors
   */
  loadAllUsers(): void {
  }
}

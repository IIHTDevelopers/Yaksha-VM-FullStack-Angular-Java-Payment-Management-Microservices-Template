import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all users
   */
  getAllUsers(): any {
    return null;
  }

  /**
   * Create a new user
   */
  createUser(user: User): any {
    return null;
  }

  /**
   * Update an existing user by ID
   */
  updateUser(userId: number, user: User): any {
    return null;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private authenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  isAuthenticated() {
    return this.authenticated.asObservable();
  }
}

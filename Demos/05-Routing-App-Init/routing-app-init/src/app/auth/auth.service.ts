import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private authenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private user: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isAuthenticated() {
    return environment.authEnabled == false || this.authenticated.value
      ? of(true)
      : of(false);
  }

  getUser() {
    return this.user.asObservable();
  }

  login(user: string) {
    this.user.next(user);
    this.authenticated.next(true);
  }

  logout() {
    this.authenticated.next(false);
  }
}

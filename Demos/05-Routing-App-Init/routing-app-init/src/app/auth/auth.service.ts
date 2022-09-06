import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private authenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private user: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private authEnabled = of(environment.authEnabled);

  isAuthenticated() {
    return this.authEnabled.pipe(
      combineLatestWith(this.authenticated),
      map(([authEnabled, authenticated]) => {
        return authEnabled == false || authenticated;
      })
    );
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

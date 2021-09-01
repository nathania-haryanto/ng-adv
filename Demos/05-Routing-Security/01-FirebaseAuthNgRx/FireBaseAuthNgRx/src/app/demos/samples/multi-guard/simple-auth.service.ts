import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleAuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return true;
  }

  hasPrimeSubscription(): boolean {
    return false;
  }
}

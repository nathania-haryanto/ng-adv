import { Injectable } from '@angular/core';
import { AppFacade } from '../../../state/app.facade';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  constructor(private af: AppFacade) {}

  isLoggedIn() {
    return this.af.getIsLoggedIn();
  }
  hasPrimeSubscription() {
    return this.af.getPrimeMember();
  }
}

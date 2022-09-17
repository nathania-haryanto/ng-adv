import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from './state/auth.reducer';
import { getUser } from './state/auth.selectors';
import { redirectToLogin } from './state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class FBAuthGuard implements CanLoad {
  constructor(private store: Store<AuthState>) {}

  // this is a canLoad Guard - it does not prevent access after a logout
  // therefore another Guard is needed too!
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select(getUser).pipe(
      map((fbUser) => {
        if (!(fbUser && fbUser.email)) {
          this.store.dispatch(redirectToLogin());
          return false;
        }
        return true;
      })
    );
  }
}

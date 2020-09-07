import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthState } from './store/reducers/auth.reducer';
import { SetToken } from './store/actions/auth.actions';
@Injectable({
  providedIn: 'root'
})
export class FBAuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private store: Store<AuthState>
  ) {
    this.onUserChanged();
  }

  private onUserChanged() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user != null)
        user.getIdToken().then(token => {
          this.store.dispatch(new SetToken(token));
        });
    });
  }

  createUser(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password, stayLoggedOn, onSuccess?) {
    return this.fireAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(onSuccess)
      .catch(err => {
        console.log('Error logging in', err);
        return err;
      });
  }

  logOff() {
    return this.fireAuth.auth
      .signOut()
      .catch(err => console.log('Error logging out', err));
  }
}

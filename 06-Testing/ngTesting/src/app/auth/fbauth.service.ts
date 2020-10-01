import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { SetToken } from './store/actions/auth.actions';
import { AuthState } from './store/reducers/auth.reducer';
@Injectable({
  providedIn: 'root',
})
export class FBAuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private store: Store<AuthState>
  ) {
    this.onUserChanged();
  }

  private fbUser: firebase.User = null;

  private onUserChanged() {
    this.fireAuth.authState.subscribe((user) => {
      this.fbUser = user;
      if (user != null) {
        this.fbUser.getIdToken().then((token) => {
          this.store.dispatch(new SetToken(token));
        });
      }
    });
  }

  async createUser(email: string, password: string): Promise<any> {
    return await this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  async logOn(user, password) {
    return await this.fireAuth.signInWithEmailAndPassword(user, password);
  }

  async logOff() {
    return await this.fireAuth.signOut();
  }
}

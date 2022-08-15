import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { getIsMockAuthenticated } from './app.selector';
import { toggleMockAuthenticated } from './app.actions';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  constructor(private state: Store<AppState>) {}

  getIsMockAuthenticated() {
    return this.state.select(getIsMockAuthenticated);
  }

  toggleAuth() {
    this.state.dispatch(toggleMockAuthenticated());
  }
}

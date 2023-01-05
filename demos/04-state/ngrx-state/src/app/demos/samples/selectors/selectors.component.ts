import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleMockAuthenticated } from 'src/app/state/app.actions';
import { AppState } from '../../../state/app.reducer';
import { getIsMockAuthenticated } from '../../../state/app.selector';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
})
export class SelectorsComponent {
  constructor(private state: Store<AppState>) {}

  isMockAuthenticated = this.state.select(getIsMockAuthenticated);

  toggleAuth() {
    this.state.dispatch(toggleMockAuthenticated());
  }
}

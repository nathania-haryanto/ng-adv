import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducer';
import { Logout } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  logOut() {
    this.store.dispatch(new Logout());
  }
}

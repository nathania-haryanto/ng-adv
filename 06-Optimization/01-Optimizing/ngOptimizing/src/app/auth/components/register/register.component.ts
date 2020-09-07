import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginCredential } from '../../login-credential.model';
import { Register } from '../../store/actions/auth.actions';
import { AuthState } from '../../store/reducers/auth.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}
  ngOnInit() {}

  login: LoginCredential = {
    email: '',
    pwd: '',
    pwdRepeat: ''
  };

  registerUser() {
    this.store.dispatch(new Register(this.login));
  }
}

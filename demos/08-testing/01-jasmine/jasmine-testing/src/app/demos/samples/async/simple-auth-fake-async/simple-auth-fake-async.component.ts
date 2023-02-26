import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';

@Component({
  selector: 'app-simple-auth-fake-async',
  templateUrl: './simple-auth-fake-async.component.html',
  styleUrls: ['./simple-auth-fake-async.component.scss'],
})
export class SimpleAuthFakeAsyncComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}

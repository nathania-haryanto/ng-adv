import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';

@Component({
  selector: 'app-simple-auth-async',
  templateUrl: './simple-auth-async.component.html',
  styleUrls: ['./simple-auth-async.component.scss'],
})
export class SimpleAuthAsyncComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}

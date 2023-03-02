import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';

@Component({
  selector: 'app-simple-auth-when-stable',
  templateUrl: './simple-auth-when-stable.component.html',
  styleUrls: ['./simple-auth-when-stable.component.scss'],
})
export class SimpleAuthWhenStableComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}

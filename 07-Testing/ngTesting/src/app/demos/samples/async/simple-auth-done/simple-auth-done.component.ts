import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';

@Component({
  selector: 'app-simple-auth-done',
  templateUrl: './simple-auth-done.component.html',
  styleUrls: ['./simple-auth-done.component.scss'],
})
export class SimpleAuthDoneComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}

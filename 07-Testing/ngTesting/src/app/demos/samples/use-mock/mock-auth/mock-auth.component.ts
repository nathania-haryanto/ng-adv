import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mock-auth',
  templateUrl: './mock-auth.component.html',
  styleUrls: ['./mock-auth.component.scss'],
})
export class MockAuthComponent implements OnInit {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }

  loggedIn: boolean;

  ngOnInit() {}
}

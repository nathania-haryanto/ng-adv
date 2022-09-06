import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private as: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.as.isAuthenticated();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-splash',
  templateUrl: './login-splash.component.html',
  styleUrls: ['./login-splash.component.scss'],
})
export class LoginSplashComponent implements OnInit {
  constructor() {}

  entryPic = '/assets/images/ng-dev.png';
  view = 'entry';

  ngOnInit(): void {}
}

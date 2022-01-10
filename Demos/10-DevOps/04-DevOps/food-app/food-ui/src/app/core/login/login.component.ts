import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  entryPic = '/assets/images/burger.png';
  isIframe = false;

  constructor() {}

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
  }

  login() {}
}

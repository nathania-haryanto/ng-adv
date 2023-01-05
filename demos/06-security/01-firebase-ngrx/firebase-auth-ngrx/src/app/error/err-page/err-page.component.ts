import { Component, OnInit } from '@angular/core';
declare var window: Window;

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.scss'],
})
export class ErrPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getErr(): string {
    return window.history.state;
  }
}

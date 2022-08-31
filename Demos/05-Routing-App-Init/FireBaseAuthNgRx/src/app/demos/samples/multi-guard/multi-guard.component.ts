import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-guard',
  templateUrl: './multi-guard.component.html',
  styleUrls: ['./multi-guard.component.scss'],
})
export class MultiGuardComponent implements OnInit {
  title = 'Using multible Auth Guards';
  constructor() {}

  ngOnInit(): void {}
}

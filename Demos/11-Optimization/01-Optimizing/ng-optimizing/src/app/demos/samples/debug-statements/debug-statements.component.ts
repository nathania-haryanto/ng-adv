import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-statements',
  templateUrl: './debug-statements.component.html',
  styleUrls: ['./debug-statements.component.scss'],
})
export class DebugStatementsComponent implements OnInit {
  constructor() {}

  msg = 'Debugging Angular is cool';

  items = ['A', 'B', 'C'];

  ngOnInit(): void {}
}

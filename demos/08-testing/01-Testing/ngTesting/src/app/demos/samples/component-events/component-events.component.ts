import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-events',
  templateUrl: './component-events.component.html',
  styleUrls: ['./component-events.component.scss'],
})
export class ComponentEventsComponent implements OnInit {
  constructor() {}

  count = 0;

  ngOnInit(): void {}

  incrementCount() {
    this.count += 1;
  }
}

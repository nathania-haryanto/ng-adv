import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
})
export class ExpanderComponent implements OnInit {
  expanded = false;

  constructor() {}

  ngOnInit(): void {}

  toggleExpander() {
    this.expanded = !this.expanded;
  }
}

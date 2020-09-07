import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nested-child',
  template: ` <div class="divclass">Nested Child</div> `,
  styles: [
    `
      .divclass {
        border: black 4px solid;
      }

      :host-context(.theme-light) {
        background-color: lightgreen;
      }
    `,
  ],
})
export class NestedChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

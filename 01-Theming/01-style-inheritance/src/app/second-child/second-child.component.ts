import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//TODO: Add ViewEncapsulation.ShadowDom here
@Component({
  selector: 'app-second-child',
  template: ` <div class="divclass">Second Child</div> `,
  styles: [
    `
      .divclass {
        border: green 4px solid;
      }
    `,
  ],
})
export class SecondChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

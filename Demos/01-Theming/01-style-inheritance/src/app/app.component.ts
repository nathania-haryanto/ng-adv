import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="heading">
      <h2>Angular Style Inheritance & Encapsulation</h2>
    </div>
    <div class="divclass">
      <div>App Component</div>
      <app-first-child></app-first-child>
      <app-second-child></app-second-child>
    </div>`,
  styles: [
    `
      .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem;
      }

      div {
        margin: 3rem;
      }

      /* :host {
        border: 5rem solid dimgray;
        display: block;
        padding: 20px;
      } */
    `,
  ],
})
export class AppComponent {
  title = 'ngStyleInheritance';
}

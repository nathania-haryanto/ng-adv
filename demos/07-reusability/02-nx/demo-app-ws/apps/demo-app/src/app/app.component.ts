import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-app with a button';

  doClick() {
    console.log('you clicked');
  }
}

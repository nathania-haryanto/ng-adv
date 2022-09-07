import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-otherapp';
  doClick() {
    console.log('you clicked in the second project');
  }
}

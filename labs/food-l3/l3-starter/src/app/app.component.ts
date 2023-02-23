import { Component } from '@angular/core';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FirstAngular';
  constructor(public ms: MenuService) {}
}

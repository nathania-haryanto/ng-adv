import { Component } from '@angular/core';
import { FoodListComponent } from './food/food-list/food-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodlist-ssr';
}

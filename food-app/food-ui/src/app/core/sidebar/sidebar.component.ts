import { Component, OnInit } from '@angular/core';
import { MenuFacade } from '../../state/menu/menu.facade';
import { FoodFacade } from '../../food/state/food.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user = "angular@developer.com";

  constructor(
    public mf: MenuFacade,
    public ff: FoodFacade
  ) {}

  ngOnInit() {}

  addFood() {
    this.ff.addNewFood();
  }

  logout() {
    
  }
}

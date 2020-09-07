import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../food/food.model';
import { FoodService } from '../../food/food.service';

@Component({
  selector: 'app-simple-food',
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.scss'],
})
export class SimpleFoodComponent implements OnInit {
  constructor(private fs: FoodService) {}

  food: FoodItem[] | null;

  ngOnInit() {
    this.fs.getItems().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteItem(food);
  }
}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food/food.service';

@Component({
  selector: 'app-food-http',
  templateUrl: './food-http.component.html',
  styleUrls: ['./food-http.component.scss'],
})
export class FoodHttpComponent implements OnInit {
  constructor(private fs: FoodService) {}

  ngOnInit(): void {}

  addFood() {
    const food = {
      name: 'Pad Kra Pao',
      rating: 1,
    };
    this.fs.addItem(food);
  }

  getFood() {
    this.fs.getItems().subscribe((food) => console.log(food));
  }
}

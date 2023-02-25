import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../food.service';
import { ShopItemComponent } from '../shop-item/shop-item.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, ShopItemComponent],
  providers: [FoodService],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  food = this.fs.getFood();

  constructor(private fs: FoodService) { }


}

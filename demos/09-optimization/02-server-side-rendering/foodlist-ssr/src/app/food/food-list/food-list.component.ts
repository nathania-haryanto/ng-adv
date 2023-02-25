import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../food.service';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { FoodCartItem } from '../food-item.model';

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

  updateCart(cartItem: FoodCartItem) {
    console.log(cartItem);
    localStorage.setItem(cartItem.id.toString(), JSON.stringify(cartItem));
  }
}

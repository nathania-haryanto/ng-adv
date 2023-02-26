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

  cart: FoodCartItem[] = []

  constructor(private fs: FoodService) { }

  updateCart(cartItem: FoodCartItem) {
    this.fs.setFoodCart(cartItem)
    this.cart = this.fs.getFoodCart()
    console.log(this.cart);
  }
}

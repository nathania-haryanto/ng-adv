import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodCartItem, FoodItem } from './food-item.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private http: HttpClient) { }

  static prefix = 'foodcartitem-';

  getFood() {
    return this.http.get<FoodItem[]>(environment.api);
  }

  getFoodById(id: number) {
    return this.http.get<FoodItem>(`${environment.api}/${id}`);
  }

  getFoodCart() {
    var cart: FoodCartItem[] = [];
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key != null && key.includes(FoodService.prefix)) {
        var food = JSON.parse((localStorage.getItem(key)) || '{}') as FoodCartItem;
        cart.push(food);
      }
    }
    return cart;
  }

  setFoodCart(food: FoodCartItem) {
    return localStorage.setItem(`${FoodService.prefix}${food.id.toString()}`, JSON.stringify(food));
  }
}

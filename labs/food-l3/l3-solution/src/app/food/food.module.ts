import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';

@NgModule({
  declarations: [FoodContainerComponent, FoodListComponent, FoodEditComponent],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }

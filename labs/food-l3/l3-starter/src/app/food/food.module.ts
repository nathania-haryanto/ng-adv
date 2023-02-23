import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

let comps = [FoodContainerComponent, FoodListComponent, FoodEditComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule]
})
export class FoodModule {}

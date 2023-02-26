import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './food/food-details/food-details.component';
import { FoodListComponent } from './food/food-list/food-list.component';

const routes: Routes = [{
  path: '',
  component: FoodListComponent,
},
{
  path: 'food/:id',
  component: FoodDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

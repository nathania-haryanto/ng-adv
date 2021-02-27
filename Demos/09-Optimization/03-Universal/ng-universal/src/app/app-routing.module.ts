import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from './dogs/dog-list/dog-list.component';
import { DogDetailComponent } from './dogs/dog-detail/dog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DogListComponent,
  },
  {
    path: ':id',
    component: DogDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

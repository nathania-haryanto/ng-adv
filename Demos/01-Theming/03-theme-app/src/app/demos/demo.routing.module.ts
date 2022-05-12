import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { CardComponent } from './samples/card/card.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { PopupContainerComponent } from './samples/popup-container/popup-container.component';
import { TableComponent } from './samples/table/table.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'table', component: TableComponent },
      { path: 'card', component: CardComponent },
      { path: 'projection', component: ContentProjectionComponent },
      { path: 'popup', component: PopupContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(demoRoutes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}

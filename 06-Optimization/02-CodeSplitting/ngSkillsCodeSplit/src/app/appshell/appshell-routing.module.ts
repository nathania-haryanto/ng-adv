import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppshellComponent } from './appshell.component';

const routes: Routes = [
  {
    path: '',
    component: AppshellComponent,
    children: [
      {
        path: 'skills',
        loadChildren: () =>
          import('../skills/skills.module').then((m) => m.SkillsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppshellRoutingModule {}

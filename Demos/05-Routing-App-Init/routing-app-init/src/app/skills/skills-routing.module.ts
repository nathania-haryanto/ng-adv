import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillResolverService } from './skill-resolver.service';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsListComponent,
  },
  {
    path: ':id',
    component: SkillsEditComponent,
    resolve: { skill: SkillResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}

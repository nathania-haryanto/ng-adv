import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsListWithRowComponent } from './skills-list-with-row/skills-list-with-row.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { StoreModule } from '@ngrx/store';
import * as fromSkillsState from './state';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillsContainerComponent,
    SkillsListWithRowComponent,
    SkillRowComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    StoreModule.forFeature(fromSkillsState.skillsStateFeatureKey, fromSkillsState.reducers, { metaReducers: fromSkillsState.metaReducers })
  ]
})
export class SkillsModule { }

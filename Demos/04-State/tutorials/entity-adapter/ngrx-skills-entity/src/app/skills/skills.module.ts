import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsListWithRowComponent } from './skills-list-with-row/skills-list-with-row.component';
import { StoreModule } from '@ngrx/store';
import * as skills from './state/skills.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsEffects } from './state/skills.effects';

@NgModule({
  declarations: [
    SkillsContainerComponent,
    SkillsListWithRowComponent,
    SkillRowComponent,
    SkillsKpiComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    SkillsRoutingModule,
    StoreModule.forFeature(skills.skillsFeatureKey, skills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
})
export class SkillsModule {}

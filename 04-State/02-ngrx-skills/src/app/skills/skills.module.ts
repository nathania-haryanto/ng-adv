import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, skillsFeatureKey } from './store/reducers/skills.reducer';
import { SkillsEffects } from './store/effects/skills.effects';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { MaterialModule } from '../material.module';
import { SkillListWithRowComponent } from './skill-list-with-row/skill-list-with-row.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillListWithRowComponent,
    SkillRowComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(skillsFeatureKey, reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
})
export class SkillsModule {}

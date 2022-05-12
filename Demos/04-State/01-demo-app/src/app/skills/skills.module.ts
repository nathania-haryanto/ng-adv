import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { SkillListWithRowComponent } from './skill-list-with-row/skill-list-with-row.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsEffects } from './state/skills.effects';
import { reducer, skillsFeatureKey } from './state/skills.reducer';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature(skillsFeatureKey, reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
})
export class SkillsModule {}

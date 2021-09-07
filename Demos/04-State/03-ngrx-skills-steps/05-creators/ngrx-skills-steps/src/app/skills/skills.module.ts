import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEffects } from './store/effects/skill.effects';
import { skillFeatureKey, skillReducer } from './store/reducers/skill.reducer';

const comps = [
  SkillsContainerComponent,
  SkillsListComponent,
  SkillsKpiComponent,
];

// Note: Added effects to feature module
@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(skillFeatureKey, skillReducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
})
export class SkillsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SkillReducer, skillFeatureKey } from './store/reducers/skill.reducer';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(skillFeatureKey, SkillReducer)
  ]
})
export class SkillsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { SkillReducer, skillFeatureKey } from "./store/reducers/skill.reducer";
import { MaterialModule } from "../material.module";
import { EffectsModule } from "@ngrx/effects";
import { SkillsEffects } from "./store/effects/skill.effects";
import { SkillsContainerComponent } from "./skills-container/skills-container.component";
import { SkillsListComponent } from "./skills-list/skills-list.component";
import { SkillsKpiComponent } from "./skills-kpi/skills-kpi.component";

let comps = [SkillsContainerComponent, SkillsListComponent, SkillsKpiComponent];

//Note: Added effects to feature module
@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(skillFeatureKey, SkillReducer),
    EffectsModule.forFeature([SkillsEffects])
  ]
})
export class SkillsModule {}

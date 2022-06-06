import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { MaterialModule } from '../material.module';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { Skill } from './skill.model';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsDataService } from './skills-data.service';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsRoutingModule } from './skills-routing.module';

const entityMetadata: EntityMetadataMap = {
  Skill: {
    sortComparer: sortByName,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: false,
    },
  },
};

function sortByName(a: Skill, b: Skill): number {
  let comp = a.name.localeCompare(b.name);
  return comp;
}

@NgModule({
  declarations: [
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillRowComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SkillsDataService],
})
export class SkillsModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    SkillsDataService: SkillsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Skill', SkillsDataService);
  }
}

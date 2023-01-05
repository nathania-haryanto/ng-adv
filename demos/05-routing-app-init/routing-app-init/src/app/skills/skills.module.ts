import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  HttpUrlGenerator,
} from '@ngrx/data';
import { MaterialModule } from '../material.module';
import { CustomurlHttpGenerator } from './custom-url-generator';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillResolver } from './skill.resolver';
import { SkillsDataService } from './skills-data.service';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsEntityService } from './skills-entity.service';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { entityMetadata } from './skills.metadata';
import { SkillsResolver } from './skills.resolver';

@NgModule({
  declarations: [SkillsListComponent, SkillsEditComponent, SkillRowComponent],
  imports: [CommonModule, SkillsRoutingModule, MaterialModule, FormsModule],
  providers: [
    SkillsEntityService,
    SkillsDataService,
    {
      provide: HttpUrlGenerator,
      useClass: CustomurlHttpGenerator,
    },
    SkillsResolver,
    SkillResolver,
  ],
})
export class SkillsModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    skillsDataService: SkillsDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Skill', skillsDataService);
  }
}

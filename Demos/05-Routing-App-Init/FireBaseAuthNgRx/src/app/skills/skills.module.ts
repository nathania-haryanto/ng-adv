import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SkillsListComponent, SkillsEditComponent, SkillRowComponent],
  imports: [CommonModule, SkillsRoutingModule, MaterialModule, FormsModule],
})
export class SkillsModule {}

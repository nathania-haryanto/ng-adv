import { Component, OnInit } from "@angular/core";
import { EntityCollectionService } from "@ngrx/data";
import { Observable } from "rxjs";
import { SkillsEntityService } from "../skill-entity.service";
import { Skill } from "../skill.model";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    skills$: Observable<Skill[]>;
    skillsService: EntityCollectionService<Skill>;
  
    constructor(es: SkillsEntityService) {
      this.skillsService = es;
      this.skills$ = this.skillsService.entities$;
    }
  
    ngOnInit(): void {
      this.skillsService.getAll();
    }
  
    addSkill() {
      this.skillsService.add({ id: 0, name: '@ngrx/data', completed: false });
    }
  
    deleteSkill(item: Skill) {
      this.skillsService.delete(item);
    }
  }
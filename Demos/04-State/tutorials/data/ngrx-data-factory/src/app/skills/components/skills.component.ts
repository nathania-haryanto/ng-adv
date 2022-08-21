import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

  constructor(private serviceFactory: EntityCollectionServiceFactory) {
    this.skillsService = this.serviceFactory.create<Skill>('Skill');
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

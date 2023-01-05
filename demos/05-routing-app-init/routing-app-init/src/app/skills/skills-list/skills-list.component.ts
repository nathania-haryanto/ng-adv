import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent {
  constructor(
    private skillsService: SkillsEntityService,
    private route: ActivatedRoute
  ) {
    this.skills = this.skillsService.entities$;
  }

  skills: Observable<Skill[]> = this.route.data['skills'];
}

import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  constructor(private service: SkillsService) {}

  skills: Skill[] = [];

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  getNextId(): number {
    return (
      this.skills.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatestWith, map, Observable, startWith } from 'rxjs';
import { Skill } from '../../skills/skills';
import { SkillsService } from '../../skills/skills.service';

@Component({
  selector: 'app-reified-reactive',
  templateUrl: './reified-reactive.component.html',
  styleUrls: ['./reified-reactive.component.scss'],
})
export class ReifiedReactiveComponent implements OnInit {
  filter$ = new FormControl('', { nonNullable: true });
  skills$: Observable<Skill[]>;

  constructor(private service: SkillsService) {}

  ngOnInit(): void {
    // no unsubscribe needed because use of async pipe in template
    this.skills$ = this.service.getSkills().pipe(
      // initialization: startWith('') will emit an empty string to the stream
      combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
      map(([skills, filter]) => {
        return filter == ''
          ? skills
          : skills.filter((skill) => skill.title.includes(filter));
      })
    );
  }
}

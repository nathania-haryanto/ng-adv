import { Component, OnInit } from '@angular/core';
// import { LoadSkillsAction } from '../store/actions/skill.actions';
import { Store } from '@ngrx/store';
import { SkillsState } from '../store/reducers/skill.reducer';
import { loadSkills } from '../store/actions/skill.actions';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  // Note: refactored to In-Module-Container to make it more realistic -> dispatches load
  ngOnInit() {
    this.store.dispatch(loadSkills());
  }
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
// import * as skillActions from '../actions/skill.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SkillsService } from '../../skills.service';
import { Skill } from '../models/skill.model';
import {
  SkillActionTypes,
  LoadSkillsSuccess,
  LoadSkillsError,
} from '../actions/skill.actions';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private service: SkillsService) {}

  // Note: Make sure you are starting json-server or your api before using this
  @Effect()
  loadSkills$: Observable<Action> = this.actions$.pipe(
    ofType(SkillActionTypes.LoadSkills),
    mergeMap((action) =>
      this.service.getSkills().pipe(
        map((skills: Skill[]) => new LoadSkillsSuccess(skills)),
        catchError((err) => of(new LoadSkillsError(err)))
      )
    )
  );
}

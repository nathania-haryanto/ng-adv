import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Skill } from '../../skill.model';
import { SkillsService } from '../../skills.service';
import {
  addSkill,
  addSkillsFailure,
  addSkillsSuccess,
  loadSkills,
  loadSkillsFailure,
} from '../actions/skills.actions';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private service: SkillsService) {}

  loadSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSkills),
      mergeMap(() =>
        this.service.getSkills().pipe(
          map((skills: Skill[]) => ({
            type: '[Skills] Load Skills Success',
            data: skills,
          })),
          catchError(async (error) => loadSkillsFailure({ error }))
        )
      )
    )
  );

  addSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSkill),
      mergeMap((action) =>
        this.service.addSkill(action.data).pipe(
          map((skill: Skill) => addSkillsSuccess({ data: skill })),
          catchError(async (error) => addSkillsFailure({ error }))
        )
      )
    )
  );
}

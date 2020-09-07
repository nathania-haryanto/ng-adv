import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SkillsService } from '../../skills.service';
import {
  loadSkills,
  loadSkillsError,
  loadSkillsSuccess,
} from '../actions/skill.actions';
import { Skill } from '../models/skill.model';

@Injectable()
export class SkillsEffects {
  constructor(private actions$: Actions, private service: SkillsService) {}

  // Note: Make sure you are starting json-server or your api before using this
  @Effect()
  loadSkills$: Observable<Action> = this.actions$.pipe(
    ofType(loadSkills),
    mergeMap(() =>
      this.service.getSkills().pipe(
        map((skills: Skill[]) => loadSkillsSuccess({ skills })),
        catchError((err) => of(loadSkillsError({ err })))
      )
    )
  );

  // loadSkills$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadSkills),
  //     mergeMap(() =>
  //       this.service.getSkills().pipe(
  //         map((skills) => ({
  //           type: '[Skill] Load Skills Success',
  //           payload: skills,
  //         })),
  //         catchError((err) => of(loadSkillsError({ err })))
  //       )
  //     )
  //   )
  // );
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DemoService } from '../demo-base/demo.service';
import * as demoActions from './demos.actions';

@Injectable()
export class DemosEffects {
  constructor(private actions$: Actions, private service: DemoService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActions.loadDemos),
      mergeMap(() =>
        this.service.getDemos().pipe(
          map((demos) => ({
            type: '[Demos] loadDemos Success',
            items: demos,
          })),
          catchError((err) => of(demoActions.loadDemosFailure({ err })))
        )
      )
    )
  );

  deleteDemo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActions.deleteDemo),
      mergeMap((action) =>
        this.service.deleteDemo(action.item.id).pipe(
          map(() => ({
            type: '[Demos] deleteDemo Success',
            item: action.item,
          })),
          catchError((err) => of(demoActions.deleteDemoFailure({ err })))
        )
      )
    )
  );
}

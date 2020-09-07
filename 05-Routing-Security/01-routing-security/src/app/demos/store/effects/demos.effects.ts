import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, pluck } from 'rxjs/operators';
import { DemoItem } from '../../demo-item.model';
import { DemoService } from '../../demo.service';
import {
  DeleteDemoError,
  DeleteDemoSuccess,
  DemosActionsUnion,
  DemosActionTypes,
  LoadDemosError,
  LoadDemosSuccess,
} from '../actions/demos.actions';

@Injectable()
export class DemosEffects {
  constructor(private actions$: Actions, private service: DemoService) {}

  @Effect()
  loadDemos$: Observable<DemosActionsUnion> = this.actions$.pipe(
    ofType(DemosActionTypes.LoadDemos),
    mergeMap(() =>
      this.service.getDemos().pipe(
        map((demos: DemoItem[]) => new LoadDemosSuccess(demos)),
        catchError((err) => of(new LoadDemosError(err)))
      )
    )
  );

  @Effect()
  deleteDemo$: Observable<DemosActionsUnion> = this.actions$.pipe(
    ofType(DemosActionTypes.DeleteDemo),
    pluck('payload'),
    exhaustMap((demo) =>
      this.service.delete(demo).pipe(
        map(() => new DeleteDemoSuccess(demo)),
        catchError((err) => of(new DeleteDemoError(err)))
      )
    )
  );
}

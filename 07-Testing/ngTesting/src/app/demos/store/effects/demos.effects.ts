import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DemoService } from '../../demo.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, pluck, exhaustMap } from 'rxjs/operators';
import {
  DemosActionTypes,
  DemosActions,
  LoadDemosSuccess,
  LoadDemosError,
  DeleteDemoSuccess,
  DeleteDemoError,
  AddDemo,
} from '../actions/demos.actions';
import { DemoItem } from '../../demo-item.model';

@Injectable()
export class DemosEffects {
  constructor(private actions$: Actions, private service: DemoService) {}

  @Effect()
  loadDemos$: Observable<DemosActions> = this.actions$.pipe(
    ofType(DemosActionTypes.LoadDemos),
    mergeMap(() =>
      this.service.getDemos().pipe(
        map((demos: DemoItem[]) => new LoadDemosSuccess(demos)),
        catchError((err) => of(new LoadDemosError(err)))
      )
    )
  );

  @Effect()
  addDemo$: Observable<DemosActions> = this.actions$.pipe(
    ofType(DemosActionTypes.AddDemo),
    pluck('payload'),
    exhaustMap((demo) =>
      this.service.addDemo(demo).pipe(
        map(() => new DeleteDemoSuccess(demo)),
        catchError((err) => of(new DeleteDemoError(err)))
      )
    )
  );

  @Effect()
  deleteDemo$: Observable<DemosActions> = this.actions$.pipe(
    ofType(DemosActionTypes.DeleteDemo),
    pluck('payload'),
    exhaustMap((demo) =>
      this.service.delete(demo).pipe(
        map(() => new AddDemo(demo)),
        catchError((err) => of(new DeleteDemoError(err)))
      )
    )
  );
}

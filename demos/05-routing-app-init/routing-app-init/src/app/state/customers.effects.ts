import { loadCustomers, loadCustomersFailure } from './customers.actions';
import { CustomersService } from '../app-init/customers.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
@Injectable()
export class DemosEffects {
  constructor(private actions$: Actions, private service: CustomersService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCustomers),
      mergeMap(() =>
        this.service.getCustomers().pipe(
          map((customers) => ({
            type: '[App Init] loadDemos Success',
            items: customers,
          })),
          catchError((err) => of(loadCustomersFailure({ err })))
        )
      )
    )
  );
}

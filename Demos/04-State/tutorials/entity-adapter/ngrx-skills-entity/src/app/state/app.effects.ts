import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthorService } from '../authors/author.service';
import { loadAuthors, loadAuthorsFailure } from './app.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private service: AuthorService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuthors),
      mergeMap(() =>
        this.service.getAuthors().pipe(
          map((data) => ({
            type: '[App] loadAuthors Success',
            items: data,
          })),
          catchError((err) => of(loadAuthorsFailure({ err })))
        )
      )
    )
  );
}

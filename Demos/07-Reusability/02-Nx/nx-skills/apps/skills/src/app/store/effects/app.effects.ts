import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { AuthorService } from '../../authors/author.service';
import {
  AppActionTypes,
  LoadAuthorsFailure,
  LoadAuthorsSuccess,
} from '../actions/app.actions';
import { Author } from '../../authors/author.model';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private auts: AuthorService) {}

  @Effect()
  loadAuthor$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadAuthors),
    switchMap(() =>
      this.auts.getAuthors().pipe(
        map((authors: Author[]) => new LoadAuthorsSuccess(authors)),
        catchError((err) => of(new LoadAuthorsFailure(err)))
      )
    )
  );
}

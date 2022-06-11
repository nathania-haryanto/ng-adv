import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Author } from 'src/app/authors/author.model';
import { AuthorService } from '../../authors/author.service';
import {
  AppActionTypes,
  LoadAuthorsFailure,
  LoadAuthorsSuccess,
} from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private auts: AuthorService) {}

  
  loadAuthor$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AppActionTypes.LoadAuthors),
    switchMap(() =>
      this.auts.getAuthors().pipe(
        map((authors: Author[]) => new LoadAuthorsSuccess(authors)),
        catchError((err) => of(new LoadAuthorsFailure(err)))
      )
    )
  ));
}

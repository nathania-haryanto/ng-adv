import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentService } from '../comment.service';
import {
  loadComments,
  loadCommentsFailure,
  saveComment,
  saveCommentFailure,
} from './editor.actions';

@Injectable()
export class EditorEffects {
  constructor(private actions$: Actions, private service: CommentService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadComments),
      mergeMap(() =>
        this.service.getComments().pipe(
          map((demos) => ({
            type: '[Comments] loadComments Success',
            items: demos,
          })),
          catchError((err) => of(loadCommentsFailure({ err })))
        )
      )
    )
  );

  saveComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveComment),
      mergeMap((action) =>
        this.service.saveComment(action.item).pipe(
          map((demos) => ({
            type: '[Comments] saveComment Success',
            items: demos,
          })),
          catchError((err) => of(saveCommentFailure({ err })))
        )
      )
    )
  );
}

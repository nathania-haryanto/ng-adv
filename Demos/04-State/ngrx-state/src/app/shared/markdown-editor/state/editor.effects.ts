import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentService } from '../comment.service';
import { MarkdownEditorActions } from './editor.actions';
// import { deleteComment, deleteCommentFailure, loadComments, MockEditorActions } from './editor.actions';
// import {
//   loadComments,
//   loadCommentsFailure,
//   saveComment,
//   saveCommentFailure,
// } from './editor.actions';

@Injectable()
export class EditorEffects {
  constructor(private actions$: Actions, private service: CommentService) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MarkdownEditorActions.loadcomments),
      mergeMap(() =>
        this.service.getComments().pipe(
          map((comments) =>
            MarkdownEditorActions.loadcommentssuccess({ items: comments })
          ),
          catchError((err) =>
            of(MarkdownEditorActions.loadcommentsfailure({ err }))
          )
        )
      )
    )
  );

  saveComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MarkdownEditorActions.savecomments),
      mergeMap((action) =>
        this.service.saveComment(action.item).pipe(
          map((comment) =>
            MarkdownEditorActions.savecommentssuccess({ item: comment })
          ),
          catchError((err) =>
            of(MarkdownEditorActions.savecommentsfailure({ err }))
          )
        )
      )
    )
  );

  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MarkdownEditorActions.deletecomments),
      mergeMap((action) =>
        this.service.deleteComment(action.item).pipe(
          map(() =>
            MarkdownEditorActions.deletecommentssuccess({ item: action.item })
          ),
          catchError((err) =>
            of(MarkdownEditorActions.deletecommentsfailure({ err }))
          )
        )
      )
    )
  );
}

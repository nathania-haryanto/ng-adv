import { createAction, props } from '@ngrx/store';
import { CommentItem } from '../comment.model';

export const loadComments = createAction('[Comments] loadComments');

export const loadCommentsSuccess = createAction(
  '[Comments] loadComments Success',
  props<{ items: CommentItem[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments] loadComments Failure',
  props<{ err: Error }>()
);

export const saveComment = createAction(
  '[Comments] saveComment',
  props<{ item: CommentItem }>()
);

export const saveCommentSuccess = createAction(
  '[Comments] saveComment Success',
  props<{ item: CommentItem }>()
);

export const saveCommentFailure = createAction(
  '[Comments] saveComment Failure',
  props<{ err: Error }>()
);

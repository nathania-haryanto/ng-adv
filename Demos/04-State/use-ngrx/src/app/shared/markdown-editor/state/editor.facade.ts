import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommentItem } from '../comment.model';
import { loadComments, saveComment } from './editor.actions';
import { getComments, hasLoaded } from './editor.selectors';
import { EditorState } from './editor.reducer';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EditorFacade {
  constructor(private store: Store<EditorState>) {}

  init() {
    this.store.dispatch(loadComments());
  }

  hasLoaded() {
    return this.store.select(hasLoaded).pipe(take(1));
  }

  getComments() {
    return this.store.select(getComments);
  }

  saveComment(item: CommentItem) {
    this.store.dispatch(saveComment({ item }));
  }
}

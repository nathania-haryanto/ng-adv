import { createReducer, on } from '@ngrx/store';
import { CommentItem } from '../comment.model';
import {
  deleteCommentSuccess,
  loadCommentsFailure,
  loadCommentsSuccess,
  saveCommentFailure,
  saveCommentSuccess,
} from './editor.actions';

// State
export const editorFeatureKey = 'mdeditor';

export interface EditorState {
  comments: CommentItem[];
  hasLoaded: boolean;
}

export const initialEditorState: EditorState = {
  comments: [],
  hasLoaded: false,
};

// Reducer
export const editorReducer = createReducer(
  initialEditorState,
  on(loadCommentsSuccess, (state, action) => {
    return { ...state, comments: action.items, hasLoaded: true };
  }),
  on(saveCommentSuccess, (state, action) => {
    //Notice to clone an Array we use [] instead of {}
    const clone = Object.assign([], state.comments) as Array<CommentItem>;
    let idx = clone.findIndex((c) => c.id == action.item.id);
    if (idx > -1) {
      clone[idx] = action.item;
    } else {
      clone.push(action.item);
    }
    return { ...state, comments: clone };
  }),
  on(deleteCommentSuccess, (state, action) => {
    const clone = Object.assign(
      [],
      state.comments.filter((c) => c.id != action.item.id)
    ) as Array<CommentItem>;
    return { ...state, comments: clone };
  }),
  on(loadCommentsFailure, saveCommentFailure, (state, action) => {
    return { ...state };
  })
);
